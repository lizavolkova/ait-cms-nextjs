import Link from "next/link"
import {useEffect, useState} from "react";
import Image from 'next/image'
import { useQuery } from 'react-query'
import {INSTAGRAM_API_URL, INSTAGRAM_USER_NAME} from '../lib/constants';

export default function InstagramFeed() {
    const { isLoading, error, data } = useQuery('instagramData', () =>
        fetch(INSTAGRAM_API_URL)
            .then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <>Loading...</>
    }

    if (!data || error) {
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
                    {data.map((post, i) => {
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