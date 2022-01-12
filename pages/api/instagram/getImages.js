//https://darrenwhite.dev/blog/nextjs-aws-image-demo-part-3
import fetch from "node-fetch";
import { AWS_GET_IMAGES_URL, AWS_SIGNED_URL } from '../../../lib/constants';

const getImages = async (req, res) => {
    try {
        const options = {
            headers: {
                'x-api-key': process.env.API_KEY,
                'Content-Type': 'application/json'
            },
        };

        const imagesRes = await fetch(AWS_GET_IMAGES_URL, options);

        if (!imagesRes.ok) {
            throw new Error(imagesRes.statusText);
        }

        const { data } = await imagesRes.json();

        const images = data.map(({Key}) => {
            return `${AWS_SIGNED_URL}?key=${Key}`
        })

        // map every URL to promise of the fetch
        const requests = images.map((url) => fetch(url, options));
        const responses = await Promise.all(requests);
        //TODO: add error handling to this promise

        // convert to json and push to images array
        // TODO: can this be optimized
        const imagesData = [];
        await Promise.all(
            responses.map(async (r) => {
                const json = await r.json();
                imagesData.push(json);
            })
        );

        if (!data) {
            throw new Error('Data not found');
        }

        res.status(200).json(imagesData)
    } catch (error) {
        throw new Error(`Error fetching images: ${error}`);
    }
}

export default getImages;