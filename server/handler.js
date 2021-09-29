import { S3 } from 'aws-sdk';
import { promises as fs } from 'fs';
import path from 'path';
import os from 'os';
import fetch from 'node-fetch';
const Bucket = process.env.BUCKET_NAME;
const getErrorMessage = message => ({ statusCode: 500, body: JSON.stringify( { message })});

const getAll = async () => {
    const s3 = new S3({});
    const params = {
        Bucket
    };


    return new Promise((resolve) => {
        s3.listObjectsV2(params, (err, data) => {
            if (err) {
                return resolve({ error: true, message: err });
            }

            return resolve({
                success: true,
                data: data.Contents,
            });
        });
    });
};

export async function images(event) {
    console.log(event.headers['X-API-KEY'], process.env.API_KEY);

    if (event.headers['X-API-KEY'] !== process.env.API_KEY) {
        return {
            statusCode: 403
        };
    }

    try {
        const data = await getAll();

        return {
            statusCode: 200,
            body: JSON.stringify(
                data,
                null,
                2
            ),
        };
    } catch(e) {
        getErrorMessage(e)
    }


};

export const signedUrl = async (event) => {
    if (event.headers['X-API-KEY'] !== process.env.API_KEY) {
      return {
        statusCode: 403
      };
    }

    try {
        const { key } = event.queryStringParameters;
        const s3 = new S3({});
        const presignedGetUrl = await s3.getSignedUrl('getObject', {
            Bucket,
            Key: key,
            Expires: 60 * 5 // time to expire in seconds 5
        });

        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": 'http://localhost:3000',
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Methods": "*",
                "Access-Control-Allow-Credentials": true,
            },
            body: JSON.stringify(presignedGetUrl),
        };
    } catch(e) {
        getErrorMessage(e)
    }

};

export const uploadImages = async (event) => {
    const { url, Key } = JSON.parse(event.body);
    // if (isEmpty(event.body)) {
    //     return callback(null, createErrorResponse(400, 'Missing details'));
    // }
    // if !post request error

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

        console.log('S3 UPLOAD SUCCESS')
        return {
            statusCode: 200,
            body: JSON.stringify(upload)
        }

    } catch(err) {
        console.error('Error happened: ', JSON.stringify(err))
        return getErrorMessage(err)
    }
};
