import { getAllPostsForHome, getBlogSettings } from '../../lib/api'
import Container from '../../components/container'
import Layout from '../../components/layout/layout'
import ImageGallery from '../../components/layout/image-gallery';
import ImageGalleryElement from '../../components/layout/image-gallery-element';
import Link from "next/link";
import CoverImage from "../../components/post-components/cover-image";

export default function Index({ allPosts: { edges }, preview, settings }) {

    const photos = [
        {
            "sourceUrl": "https://images.unsplash.com/photo-1426170042593-200f250dfdaf?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=599&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwMzg5ODg3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
            "mediaDetails": {
                "height": 599,
                "width": 800,
                "sizes": [
                    {
                        "fileSize": 1234,
                        "sourceUrl": "https://images.unsplash.com/photo-1426170042593-200f250dfdaf?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=599&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwMzg5ODg3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
                        "height": 599,
                        "width": 800
                    }
                ]
            }
        },
        {
            "sourceUrl": "https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=799&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
            "mediaDetails": {
                "height": 799,
                "width": 800,
                "sizes": [
                    {
                        "fileSize": 1234,
                        "sourceUrl": "https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=799&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
                        "height": 799,
                        "width": 800
                    }
                ]
            }
        },
        {
            "sourceUrl": "https://images.unsplash.com/photo-1459190342773-1851eb48d5d2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=799&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNzc5ODkwOQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
            "mediaDetails": {
                "height": 799,
                "width": 600,
                "sizes": [
                    {
                        "fileSize": 1234,
                        "sourceUrl": "https://images.unsplash.com/photo-1459190342773-1851eb48d5d2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=799&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNzc5ODkwOQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
                        "height": 799,
                        "width": 600
                    }
                ]
            }
        },
        {
            "sourceUrl": "https://images.unsplash.com/photo-1496060169243-453fde45943b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=799&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNjcwNTEzMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
            "mediaDetails": {
                "height": 799,
                "width": 600,
                "sizes": [
                    {
                        "fileSize": 1234,
                        "sourceUrl": "https://images.unsplash.com/photo-1496060169243-453fde45943b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=799&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNjcwNTEzMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
                        "height": 799,
                        "width": 600
                    }
                ]
            }
        },
        {
            "sourceUrl": "https://images.unsplash.com/photo-1478733672327-ce27bc999503?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=799&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
            "mediaDetails": {
                "height": 799,
                "width": 600,
                "sizes": [
                    {
                        "fileSize": 1234,
                        "sourceUrl": "https://images.unsplash.com/photo-1478733672327-ce27bc999503?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=799&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
                        "height": 799,
                        "width": 600
                    }
                ]
            }
        },
        {
            "sourceUrl": "https://images.unsplash.com/photo-1446034295857-c39f8844fad4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=599&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
            "mediaDetails": {
                "height": 599,
                "width": 800,
                "sizes": [
                    {
                        "fileSize": 1234,
                        "sourceUrl": "https://images.unsplash.com/photo-1446034295857-c39f8844fad4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=599&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
                        "height": 599,
                        "width": 800
                    }
                ]
            }
        },
        {
            "sourceUrl": "https://images.unsplash.com/photo-1482003297000-b7663a1673f1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=799&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNDY4MTA2OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
            "mediaDetails": {
                "height": 799,
                "width": 600,
                "sizes": [
                    {
                        "fileSize": 1234,
                        "sourceUrl": "https://images.unsplash.com/photo-1482003297000-b7663a1673f1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=799&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNDY4MTA2OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
                        "height": 799,
                        "width": 600
                    }
                ]
            }
        },
        {
            "sourceUrl": "https://images.unsplash.com/photo-1446750010813-9bcd2524083f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=599&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMDQzMTg5Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
            "mediaDetails": {
                "height": 599,
                "width": 800,
                "sizes": [
                    {
                        "fileSize": 1234,
                        "sourceUrl": "https://images.unsplash.com/photo-1446750010813-9bcd2524083f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=599&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMDQzMTg5Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
                        "height": 599,
                        "width": 800
                    }
                ]
            }
        },
        {
            "sourceUrl": "https://images.unsplash.com/photo-1477490209413-bd54a40dea62?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=599&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMDQzMjk2MQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
            "mediaDetails": {
                "height": 599,
                "width": 800,
                "sizes": [
                    {
                        "fileSize": 1234,
                        "sourceUrl": "https://images.unsplash.com/photo-1477490209413-bd54a40dea62?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=599&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMDQzMjk2MQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
                        "height": 599,
                        "width": 800
                    }
                ]
            }
        },
        {
            "sourceUrl": "https://images.unsplash.com/photo-1510749097282-cbac5de4f6f1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=799&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
            "mediaDetails": {
                "height": 799,
                "width": 600,
                "sizes": [
                    {
                        "fileSize": 1234,
                        "sourceUrl": "https://images.unsplash.com/photo-1510749097282-cbac5de4f6f1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=799&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
                        "height": 799,
                        "width": 600
                    }
                ]
            }
        },
        {
            "sourceUrl": "https://images.unsplash.com/photo-1507139722691-cc2c94e3a2b2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=599&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
            "mediaDetails": {
                "height": 599,
                "width": 800,
                "sizes": [
                    {
                        "fileSize": 1234,
                        "sourceUrl": "https://images.unsplash.com/photo-1507139722691-cc2c94e3a2b2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=599&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
                        "height": 599,
                        "width": 800
                    }
                ]
            }
        },
        {
            "sourceUrl": "https://images.unsplash.com/photo-1468387576571-ee44d4c52d82?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNzM4MDYwNA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=4927",
            "mediaDetails": {
                "height": 1000,
                "width": 4927,
                "sizes": [
                    {
                        "fileSize": 1234,
                        "sourceUrl": "https://images.unsplash.com/photo-1468387576571-ee44d4c52d82?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNzM4MDYwNA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=4927",
                        "height": 1000,
                        "width": 4927
                    }
                ]
            }
        },
        {
            "sourceUrl": "https://images.unsplash.com/photo-1451481086097-f6a15d5f8d18?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=599&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
            "mediaDetails": {
                "height": 599,
                "width": 800,
                "sizes": [
                    {
                        "fileSize": 1234,
                        "sourceUrl": "https://images.unsplash.com/photo-1451481086097-f6a15d5f8d18?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=599&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
                        "height": 599,
                        "width": 800
                    }
                ]
            }
        },
        {
            "sourceUrl": "https://images.unsplash.com/photo-1508881136857-d1781947f4d6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=599&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
            "mediaDetails": {
                "height": 599,
                "width": 800,
                "sizes": [
                    {
                        "fileSize": 1234,
                        "sourceUrl": "https://images.unsplash.com/photo-1508881136857-d1781947f4d6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=599&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
                        "height": 599,
                        "width": 800
                    }
                ]
            }
        },
        {
            "sourceUrl": "https://images.unsplash.com/photo-1508255139162-e1f7b7288ab7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
            "mediaDetails": {
                "height": 400,
                "width": 600,
                "sizes": [
                    {
                        "fileSize": 1234,
                        "sourceUrl": "https://images.unsplash.com/photo-1508255139162-e1f7b7288ab7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
                        "height": 400,
                        "width": 600
                    }
                ]
            }
        },
        {
            "sourceUrl": "https://images.unsplash.com/photo-1508144322886-717c284ab392?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=533&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNDY4NDU0OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
            "mediaDetails": {
                "height": 533,
                "width": 800,
                "sizes": [
                    {
                        "fileSize": 1234,
                        "sourceUrl": "https://images.unsplash.com/photo-1508144322886-717c284ab392?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=533&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNDY4NDU0OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
                        "height": 533,
                        "width": 800
                    }
                ]
            }
        },
        {
            "sourceUrl": "https://images.unsplash.com/photo-1507629221898-576a56b530bb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=494&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNDY4NDU0OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=740",
            "mediaDetails": {
                "height": 494,
                "width": 740,
                "sizes": [
                    {
                        "fileSize": 1234,
                        "sourceUrl": "https://images.unsplash.com/photo-1507629221898-576a56b530bb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=494&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNDY4NDU0OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=740",
                        "height": 494,
                        "width": 740
                    }
                ]
            }
        }
    ];

    return (
        <>
            <Layout preview={preview}>
                <Container>
                    <div className="prose max-w-none">
                        <h1 className="text-center font-cormorant">Costume Gallery</h1>
                        <ImageGallery>
                            {photos.map((photo,i) => {
                                    return (
                                        <ImageGalleryElement key={i}>
                                            <Link href="gallery/outlander">
                                                <>
                                                    <div className="absolute w-full h-full bg-black z-10 pb=4 opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>

                                                    <div className="absolute transition-opacity duration-300 inset-x-0 bottom-0 z-30 opacity-100 group-hover:opacity-100 lg:opacity-0">
                                                        <h4 className="font-sans text-white m-8 font-bold">TEXT</h4>
                                                    </div>
                                                    <CoverImage title="" coverImage={photo} slug="" />
                                                </>
                                            </Link>
                                        </ImageGalleryElement>
                                    )
                                })
                            }
                        </ImageGallery>
                    </div>
                </Container>
            </Layout>
        </>
    )
}

export async function getStaticProps({ preview = false }) {
    const settings = await getBlogSettings()
    const allPosts = await getAllPostsForHome(preview)

    return {
        props: { allPosts, preview, settings },
    }
}
