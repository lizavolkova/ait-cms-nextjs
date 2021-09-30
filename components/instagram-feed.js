import Link from "next/link"
import {useEffect, useState} from "react";
import Image from 'next/image'

export default function InstagramFeed() {
    const [posts, setPosts] = useState([])
    const [error, setError] = useState(false)

    useEffect(async () => {
        try {
            const data = await fetch('/api/instagram')
            if (!data.ok) {
                throw new Error(data.statusText);
            }

            const posts = await data.json();
            setPosts(posts)

        } catch(error) {
            console.log('api error')
            setError(true)
        }

    }, []);

    if (!posts || error) {
        return (
            <>
                There was a problem connecting to Instagram
            </>
        )
    }

    console.log(posts)
    return (
        <>
            <h2>
                <a href="https://www.instagram.com/yourinstagramhandle/">
                    Follow Us on Instagram
                </a>
                <ul className="flex flex-wrap justify-center">
                    {posts.map((post, i) => {
                        return (
                            <li key={i} className="m-2">
                                <a href={`https://www.instagram.com/p/${post.shortcode}`} target="_blank" rel="noreferrer">
                                    <Image src={post.s3_url} width={100} height={100} />
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </h2>


        </>
    )
}


// <ul>
//     {/* let's iterate through each of the
//          index posts that were returned
//          from the Instagram API*/}
//     {posts.map(({ node }, i) => {
//         return (
//             // let's wrap each post in an anchor tag
//             // and construct the url for the post using
//             // the shortcode that was returned from the API
//             <li key={node.id}>
//                 <a
//                     href={`https://www.instagram.com/p/${node.shortcode}`}
//                     key={i}
//                     aria-label="view image on Instagram"
//                 >
//                     {/* set the image src equal to the image
//                 url from the Instagram API*/}
//                     <Image src='/index/img-954614431982330478.jpg' width={100} height={100}/>
//
//                     {/*<img*/}
//                     {/*    src={node.display_url}*/}
//                     {/*    alt={*/}
//                     {/*        // the caption with hashtags removed*/}
//                     {/*        node.edge_media_to_caption?.edges[0]?.node?.text*/}
//                     {/*            .replace(/(#\w+)+/g, "")*/}
//                     {/*            .trim()*/}
//                     {/*    }*/}
//                     {/*/>*/}
//                 </a>
//             </li>
//         )
//     })}
// </ul>