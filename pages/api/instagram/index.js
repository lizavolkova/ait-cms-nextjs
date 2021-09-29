import Instagram from "instagram-web-api"
import fs from 'fs/promises'
import path from 'path'
import http from 'http'
import fetch from "node-fetch";
import util from 'util';
import stream from 'stream';
const streamPipeline = util.promisify(require('stream').pipeline)
const finished = util.promisify(stream.finished);
import getImages from './getImages'
import saveImages from './saveImages'



export default async function index(req, res) {
    try {
        //const images = await getImages();
        const images = await saveImages();
        res.status(200).json(images)
    } catch(error) {
        console.error(error)
        res.status(500).json({error})
    }

    // const CACHE_PATH = path.resolve('insta.json')
    // let cachedData = [];
    //
    // try {
    //     cachedData = JSON.parse(fs.readFileSync(path.join(CACHE_PATH), 'utf8'))
    // } catch (error) {
    //     console.log('Member cache not initialized')
    // }
    //
    // if (!cachedData) {
    //     // fetch data
    //     //write to file
    //     // https://flaviocopes.com/nextjs-cache-data-globally/
    //
    // }


    //https://dev.to/dlw/next-js-and-aws-image-demo-part-2-pl5

    // delete all images in directory
    // fs.readdir(images_dir, (err, files) => {
    //     if (err) throw err;
    //
    //     for (const file of files) {
    //         fs.unlink(path.join(images_dir, file), err => {
    //             if (err) throw err;
    //         });
    //     }
    // });

    // save images
    // async function saveImages(url, id) {
    //     try {
    //         const response = await fetch(url);
    //         const buffer = await response.buffer()
    //         fs.writeFile(path.resolve(images_dir, `img-${id}.jpg`), buffer, () => {
    //             console.log('finished downloading!');
    //         })
    //     } catch(error) {
    //         console.log('error fetching images', error)
    //     }
    //
    // }
    //
    // const getData = async () => {
    //     return Promise.all(cachedData.map(node => {
    //         saveImages(node.node.thumbnail_src, node.node.id)
    //     }))
    // }
    //
    //
    // getData().then(res => console.log('IMAGE SAVED!'))


    // let instagramPosts = []
    //
    // const client = new Instagram({
    //     username: process.env.IG_USERNAME,
    //     password: process.env.IG_PASSWORD,
    // })
    //
    //
    // let posts = []
    // try {
    //     // attempt to log in to Instagram
    //     await client.login()
    //     console.log(client);
    //     // request photos for a specific index user
    //     const index = await client.getPhotosByUsername({
    //         username: process.env.IG_USERNAME,
    //     })
    //
    //     console.log(index);
    //
    //     if (index["user"]["edge_owner_to_timeline_media"]["count"] > 0) {
    //         // if we receive timeline data back
    //         //  update the posts to be equal
    //         // to the edges that were returned from the index API response
    //         posts = index["user"]["edge_owner_to_timeline_media"]["edges"]
    //     }
    // } catch (err) {
    //     // throw an error if login to Instagram fails
    //     console.log("Something went wrong while logging into Instagram", err)
    // }


    // const post = await prisma.post.findUnique({
    //     where: {
    //         id: 1 || -1,
    //     },
    //     include: {
    //         author: {
    //             select: { name: true },
    //         },
    //     },
    // });

    //res.status(200).json(cachedData)
}

// {
//     method: 'POST',
//         body: JSON.stringify(
//     {
//         Key: 'test-image.jpg',
//         url: 'https://images.pexels.com/photos/5490384/pexels-photo-5490384.jpeg?auto=compress&cs=tinysrgb&h=200&w=200'
//     })
// }




