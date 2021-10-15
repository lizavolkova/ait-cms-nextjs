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

    // const test = await fetch('https://www.instagram.com/volk2712/channel/?__a=1');
    // const json = await test.json();
    // console.log('JSON ', json);
    //
    // res.status(200).json({});

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
        console.error("Something went wrong while trying to update the cache", err)
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
        const user = await fetch('https://www.instagram.com/volk2712/channel/?__a=1');
        const userData = await user.json();
        console.log('USER DATA')
        console.log(userData);
        const { edge_owner_to_timeline_media } = userData?.graphql?.user;

        console.log(edge_owner_to_timeline_media)

        if (edge_owner_to_timeline_media.count > 0) {
            const { edges } = edge_owner_to_timeline_media
            await fs.writeFile(CACHE_PATH, JSON.stringify(posts));
            console.log(edges);
            return edges;
        }

    } catch (err) {
        // throw an error if login to Instagram fails
        console.error("Something went wrong while fetching photos from Insta", err)
        throw new Error(err)
    }



}




