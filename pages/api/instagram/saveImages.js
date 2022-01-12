import fetch from "node-fetch";
import { AWS_UPLOAD_IMAGES_URL } from '../../../lib/constants';

const saveImages = async (data) => {
    try {
        const res = await fetch(AWS_UPLOAD_IMAGES_URL, {
            method: 'POST',
            headers: {
                'x-api-key': process.env.API_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        return await res.json();
    } catch(error) {
        throw new Error(`Error saving images: ${error}`);
    }

}

export default saveImages;