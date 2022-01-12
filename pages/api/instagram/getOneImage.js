import fetch from "node-fetch";

const getOneImage = async (Key) => {
    try {
        const options = {
            headers: {
                'x-api-key': process.env.API_KEY,
                'Content-Type': 'application/json'
            },
        };

        const url = `https://opxxbb1zq6.execute-api.us-east-1.amazonaws.com/dev/signed-url?key=${Key}`;
        return await fetch(url, options);
    } catch (error) {
        throw new Error(`Error fetching images: ${error}`);
    }
}

export default getOneImage;