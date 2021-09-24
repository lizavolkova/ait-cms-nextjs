import * as Vibrant from 'node-vibrant'

export default async function color(req, res) {
    const { method } = req

    if (method !== 'POST') {
        res.status(405).send({ message: 'Only POST requests allowed' })
        return
    }

    if (method === 'POST') {
        const { url } = JSON.parse(req.body);
        const palette = await Vibrant.from(url).getPalette();
        const r = palette.LightMuted.rgb[0];
        const g = palette.LightMuted.rgb[1];
        const b = palette.LightMuted.rgb[2];
        const hex = rgbToHex(r, g, b)

        res.status(200).json({hex})
    }

}

//https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}