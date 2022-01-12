import fetch from "node-fetch";

const saveImages = async (data) => {
    try {

        // const body = [
        //     {
        //         Key: 'red-leaves.jpg',
        //         url: 'https://images.pexels.com/photos/2388865/pexels-photo-2388865.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        //     },
        //     {
        //         Key: 'autumn-leaves.jpg',
        //         url: 'https://images.pexels.com/photos/1590551/pexels-photo-1590551.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        //     },
        //     {
        //         Key: 'pumpkins.jpg',
        //         url: 'https://images.pexels.com/photos/619418/pexels-photo-619418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        //     }
        // ]

        const res = await fetch('https://opxxbb1zq6.execute-api.us-east-1.amazonaws.com/dev/uploadImages', {
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