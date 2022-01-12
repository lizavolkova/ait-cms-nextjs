import path from "path";
import os from "os";
import {S3} from "aws-sdk";
import fetch from "node-fetch";
import {promises as fs} from "fs";
import { createErrorResponse, returnSuccess, returnError, isEmpty } from "./utils";
const Bucket = process.env.BUCKET_NAME;

export const handler = async (event) => {
    if (event.headers['x-api-key'] !== process.env.API_KEY) {
        console.error('Incorrect API key', event.headers['x-api-key'], process.env.API_KEY)
        return createErrorResponse(403, 'Access denied')
    }

    if (event.httpMethod !== 'POST') {
        console.error('Not a POST request')
        return createErrorResponse(405, 'Method not allowed');
    }

    if (isEmpty(event.body)) {
        console.error('Body empty')
        return createErrorResponse(400, 'Missing details');
    }

    const files = JSON.parse(event.body);
    console.log('Files ', files);

    try {
        console.log('Starting images upload');

        const promises = await files.map(async file => {
            return await uploadImage(file);
        });

        const done = await Promise.all(promises);
        console.log('Files uploaded!');
        return returnSuccess(done);
    } catch(err) {
        return returnError(err)
    }
}

const uploadImage = async (file) => {
    const { url, Key } = file;


    // const body = {
    //     Key: 'test-image-new.jpg',
    //     url: 'https://images.pexels.com/photos/5490384/pexels-photo-5490384.jpeg?auto=compress&cs=tinysrgb&h=200&w=200'
    // };
    // const { Key, url } = body;

    //https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/122517493_194774955528245_693985917020187860_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=105&_nc_ohc=SiJ6pUIGrUMAX-6wHXG&edm=AABBvjUBAAAA&ccb=7-4&oh=2295f7320ee96916b304429ebc90a616&oe=615B30B1&_nc_sid=83d603

    const PATH_TO_FILE = path.join(os.tmpdir(), Key);
    const s3 = new S3({});
    console.log('STARTING FETCH...')

    try {
        const res = await fetch(url);
        const data = await res.buffer();

        const buffer = Buffer.from(data).toString('base64');
        console.log('Binary successfully created', buffer)

        const writeFile = await fs.writeFile(PATH_TO_FILE, buffer, 'base64');
        console.log('Wrote file ', writeFile);

        const fileContent = await fs.readFile(PATH_TO_FILE);
        console.log('Read file contents ', fileContent);

        const params = {
            Bucket,
            Key,
            Body: fileContent,
            ContentType: 'image/jpeg'
        }

        const upload = await s3.upload(params).promise().then((data) => {
            console.log(`File uploaded successfully. ${data}`);
            return data;
        }, (err) => {
            console.error(err);
            return err;
        });

        console.log('S3 UPLOAD SUCCESS', upload)
        return upload;


    } catch(err) {
        return returnError(err)
    }
};
