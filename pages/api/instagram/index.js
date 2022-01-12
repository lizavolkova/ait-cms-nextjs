import Instagram from "instagram-web-api"
import fs from 'fs/promises'
import path from 'path'
import saveImages from './saveImages'
import getOneImage from './getOneImage'
import os from 'os';

// TODO: proabably move this to S3
const CACHE_PATH = path.join(os.tmpdir(),'insta.json');

export default async function index(req, res) {
    let cachedData;

    try {
        const cachedDataRaw = await fs.readFile(CACHE_PATH, 'utf8');
        cachedData = await JSON.parse(cachedDataRaw);
        console.log('Found Cached Data at ', CACHE_PATH)
    } catch (error) {
        // TODO: throwing error breaks loop, find a better way
        console.log(error)
        console.error('Member cache not initialized', error)
    }

    // if no cache or cache has expired
    if (!cachedData) {
        cachedData = await fetchAndCacheData();
    }
    console.log(cachedData)

    const data = cachedData.map( ({ node: { thumbnail_src, display_url, id, shortcode, edge_media_to_caption} }) => {
        return {
            id,
            display_url,
            thumbnail_src,
            shortcode,
            edge_media_to_caption
        }
    });

    console.log('Requesting images from S3')
    const promises = await data.map(async image => {
        const test = await getOneImage(`${image.id}.jpg`);
        const s3_url = await test.json();
        return {
            ...image,
            s3_url
        }
    });

    const done = await Promise.all(promises);
    console.log('Images fetched from S3')

    res.status(200).json(done)

}

/**
 * Fetch data from IG and save to cache
 * Upload new images to S3
 * @returns {Promise<*|*[]>}
 */
const fetchAndCacheData = async() => {
    try {
        // REFERENCE: https://flaviocopes.com/nextjs-cache-data-globally/
        console.log('No cached data, fetching...')

        const cachedData = await getInstagramData();
        console.log('Data fetched from instagram')

        const imagesToSave = cachedData.map( ({node}) => {
            return {
                Key: `${node.id}.jpg`,
                url: node.thumbnail_src
            }
        })

        await saveImages(imagesToSave);
        console.log('Images uploaded to S3 ');

        return cachedData
    } catch(err) {
        // throw an error if login to Instagram fails
        console.error("Something went wrong while trying to update the cache", err)
        throw new Error(err)
    }

}

/**
 * Login to instagram and create client
 * @returns {Promise<*>}
 */
const loginToInsta = async () => {
    console.log('GETTING INSTA DATA FOR ', process.env.IG_USERNAME);

    // Create Instagram client
    const client = new Instagram({
        username: process.env.IG_USERNAME,
        password: process.env.IG_PASSWORD
    })

    try {
        // attempt to log in to Instagram
        await client.login()
        console.log('Logged into Instagram ', 'process.env.IG_USERNAME', process.env.IG_PASSWORD)

        return client;

    }   catch(err) {
        // throw an error if login to Instagram fails
        console.error("Something went wrong while logging into Instagram", err)
        throw new Error(err)
    }
}

/**
 * Login and fetch data from Instagram
 * @returns {Promise<*|*[]>}
 */
const getInstagramData = async () => {
    let posts = []

    try {
        const client = await loginToInsta();
        const index = await client.getPhotosByUsername({
            username: process.env.IG_USERNAME,
            first: 8
        })
        console.log('Got posts from Instagram');

        if (index && index["user"]["edge_owner_to_timeline_media"]["count"] > 0) {
            // if we receive timeline data back
            //  update the posts to be equal
            // to the edges that were returned from the index API response
            posts = index["user"]["edge_owner_to_timeline_media"]["edges"]
            await fs.writeFile(CACHE_PATH, JSON.stringify(posts));
            console.log(posts)
            return posts;
        }
    } catch (err) {
        // throw an error if login to Instagram fails
        console.error("Something went wrong while fetching photos from Insta", err)
        throw new Error(err)
    }



}




