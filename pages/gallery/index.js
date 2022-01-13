import { getAllPostsForHome, getBlogSettings } from '../../lib/api'
import Container from '../../components/container'
import Layout from '../../components/layout/layout'
import ImageGallery from '../../components/layout/gallery';

export default function Index({ allPosts: { edges }, preview, settings }) {


    return (
        <>
            <Layout preview={preview}>
                <Container>
                    <ImageGallery />
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
