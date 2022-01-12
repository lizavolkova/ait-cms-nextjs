import Link from "next/link"
import {useEffect, useState} from "react";
import Image from 'next/image'
import {INSTAGRAM_API_URL, INSTAGRAM_USER_NAME} from '../lib/constants';

export default function InstagramFeed() {
    const [posts, setPosts] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(async () => {
        try {
            setLoading(true);
            const data = await fetch(INSTAGRAM_API_URL)
            if (!data.ok) {
                throw new Error(data.statusText);
            }

            const posts = await data.json();
            setPosts(posts)
            setLoading(false)

        } catch(error) {
            setLoading(false)
            console.log('api error')
            setError(true)
        }

    }, []);

    if (loading) {
        return <>Loading...</>
    }

    if (!posts || error) {
        return (
            <>
                There was a problem connecting to Instagram
            </>
        )
    }

    return (
        <>
            <h2>
                <a href={`https://www.instagram.com/${INSTAGRAM_USER_NAME}/`}>
                    Follow Us on Instagram
                </a>
                <ul className="flex flex-wrap justify-center">
                    {posts.map((post, i) => {
                        const altText = post.edge_media_to_caption?.edges[0]?.node?.text.replace(/(#\w+)+/g, "").trim();

                        return (
                            <li key={i} className="m-2">
                                <a href={`https://www.instagram.com/p/${post.shortcode}`} target="_blank" rel="noreferrer" aria-label="view image on Instagram">
                                    <Image src={post.s3_url} width={100} height={100} alt={altText}/>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </h2>
        </>
    )
}