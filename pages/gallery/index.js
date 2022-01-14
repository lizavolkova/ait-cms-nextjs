import { getAllPostsForHome, getBlogSettings, getAllCostumes, getAllFeaturedCostumes } from '../../lib/api'
import Container from '../../components/container'
import Layout from '../../components/layout/layout'
import ImageGallery from '../../components/layout/image-gallery';
import ImageGalleryElement from '../../components/layout/image-gallery-element';
import Link from "next/link";
import CoverImage from "../../components/post-components/cover-image";

export default function Index({ allCostumes: { nodes }, preview, settings }) {

    return (
        <>
            <Layout preview={preview}>
                <Container>
                    <div className="prose max-w-none">
                        <h1 className="text-center font-cormorant">Costume Gallery</h1>
                        <ImageGallery>
                            {nodes.map((costume) => {
                                    return (
                                        <ImageGalleryElement key={costume.id}>
                                            <Link href="gallery/outlander">
                                                <>
                                                    <div className="absolute w-full h-full bg-black z-10 pb=4 opacity-0 group-hover:opacity-40 transition-opacity ease-in duration-300 lg:opacity-0 opacity-20"></div>
                                                    <div className="absolute transition-opacity duration-300 inset-x-0 bottom-0 z-30 opacity-100 group-hover:opacity-100 lg:opacity-0">
                                                        <h4 className="font-sans text-white m-8 font-bold">{costume.title}</h4>
                                                    </div>
                                                    <CoverImage title="" coverImage={costume.featuredImage.node} slug="" />
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
    const allCostumes = await getAllFeaturedCostumes(preview)

    return {
        props: { allCostumes, preview, settings }
    }
}