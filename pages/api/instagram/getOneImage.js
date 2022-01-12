import fetch from "node-fetch";
import { AWS_SIGNED_URL } from '../../../lib/constants';

const getOneImage = async (Key) => {
    try {
        const options = {
            headers: {
                'x-api-key': process.env.API_KEY,
                'Content-Type': 'application/json'
            },
        };
        const url = `${AWS_SIGNED_URL}?key=${Key}`;
        return await fetch(url, options);
    } catch (error) {
        throw new Error(`Error fetching images: ${error}`);
    }
}

export default getOneImage;