import Instagram from "instagram-web-api"
import prisma from '../../lib/prisma'
import fs from 'fs'
import path from 'path'
import http from 'http'

export default async function instagram(req, res) {
    const CACHE_PATH = path.resolve('insta.json')
    let cachedData = [];

    try {
        cachedData = JSON.parse(fs.readFileSync(path.join(CACHE_PATH), 'utf8'))
    } catch (error) {
        console.log('Member cache not initialized')
    }

    if (!cachedData) {
        // fetch data
        //write to file
        // https://flaviocopes.com/nextjs-cache-data-globally/


    }

    const images_dir = path.resolve(process.env.PWD, 'public/images/instagram');

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
    async function saveImages(url, id) {
        try {
            const response = await fetch(url);
            const buffer = await response.buffer()
            fs.writeFile(path.resolve(images_dir, `img-${id}.jpg`), buffer, () => {
                console.log('finished downloading!');
            })
        } catch(error) {
            console.log('error fetching images', error)
        }

    }

    const getData = async () => {
        return Promise.all(cachedData.map(node => {
            saveImages(node.node.thumbnail_src, node.node.id)
        }))
    }


    getData().then(res => console.log('IMAGE SAVED!'))


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
    //     // request photos for a specific instagram user
    //     const instagram = await client.getPhotosByUsername({
    //         username: process.env.IG_USERNAME,
    //     })
    //
    //     console.log(instagram);
    //
    //     if (instagram["user"]["edge_owner_to_timeline_media"]["count"] > 0) {
    //         // if we receive timeline data back
    //         //  update the posts to be equal
    //         // to the edges that were returned from the instagram API response
    //         posts = instagram["user"]["edge_owner_to_timeline_media"]["edges"]
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

    res.status(200).json(cachedData)
}