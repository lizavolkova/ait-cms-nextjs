import Instagram from "instagram-web-api"
import fs from 'fs/promises'
import path from 'path'
import saveImages from './saveImages'
import getOneImage from './getOneImage'
import logger from '../../../lib/logger'

const CACHE_PATH = path.resolve('insta.json');

export default async function index(req, res) {
    let cachedData;

    logger.info("testing from logger pino!!")
    // TODO: wrap in try/catch
    // TODO: check for file time stamp

    try {
        const cachedDataRaw = await fs.readFile(CACHE_PATH, 'utf8');
        cachedData = await JSON.parse(cachedDataRaw);
        console.log('Found Cached Data')
    } catch (error) {
        // TODO: throwing error breaks loop, find a better way
        console.log(error)
        console.error('Member cache not initialized', error)
    }

    // if no cache or cache has expired
    if (!cachedData) {
        cachedData = await fetchAndCacheData();
    }

    const data = cachedData.map( ({ node: { thumbnail_src, display_url, id, shortcode} }) => {
        return {
            id,
            display_url,
            thumbnail_src,
            shortcode
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

    res.status(200).json(done)

}

/**
 * Fetch data from IG and save to cache
 * Upload new images to S3
 * @returns {Promise<*|*[]>}
 */
const fetchAndCacheData = async() => {
    try {
        console.log('No cached data, fetching...')
        // https://flaviocopes.com/nextjs-cache-data-globally/

        const cachedData = await getInstagramData();
        console.log('data fetched from instagram')
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
        //console.error("Something went wrong while trying to update the cache", err)
        throw new Error(err)
    }

}

const loginToInsta = async () => {
    console.log('GETTING INSTA DATA FOR ', process.env.IG_USERNAME);

    // Create Instagram client
    const client = new Instagram({
        username: 'volk2712',
        password: 'Volk@Autumn123'
    })

    try {
        // attempt to log in to Instagram
        await client.login()
        console.log('Logged into Instagram ', 'process.env.IG_USERNAME', process.env.IG_PASSWORD)
        // request photos for a specific index user

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
            return posts;
        }
    } catch (err) {
        // throw an error if login to Instagram fails
        console.error("Something went wrong while fetching photos from Insta", err)
        throw new Error(err)
    }



}




