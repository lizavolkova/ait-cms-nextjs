import { returnError } from "./utils";
import {S3} from "aws-sdk";
const Bucket = process.env.BUCKET_NAME;

export async function handler(event) {
    console.log(event.headers['x-api-key'], process.env.API_KEY);

    if (event.headers['x-api-key'] !== process.env.API_KEY) {
        return returnError({
            statusCode: 403
        });
    }

    try {
        console.log('Initializing getAll()')
        const data = await getAll();
        console.log('Got all ', data);

        return {
            statusCode: 200,
            body: JSON.stringify(
                data,
                null,
                2
            ),
        };
    } catch(e) {
        return returnError(e)
    }
};

const getAll = async () => {
    const s3 = new S3({});
    const params = {
        Bucket
    };
    console.log('Inside Get All function')
    return new Promise((resolve) => {
        s3.listObjectsV2(params, (err, data) => {
            if (err) {
                return resolve({ error: true, message: err });
            }

            console.log('Contents gotten ', data.Contents)
            return resolve({
                success: true,
                data: data.Contents,
            });
        });
    });
};