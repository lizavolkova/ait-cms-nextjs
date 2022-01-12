import {S3} from "aws-sdk";
import { returnError } from "./utils";
const Bucket = process.env.BUCKET_NAME;

export const handler = async (event) => {
    if (event.headers['x-api-key'] !== process.env.API_KEY) {
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
        console.log('Got presignedGetUrl ', presignedGetUrl)

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
        return returnError(e)
    }

};
