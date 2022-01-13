import {getAllPostsForHome, getAllCostumes, getBlogSettings} from '../../lib/api'
import Container from '../../components/container'
import Layout from '../../components/layout/layout'
import {BLOG_DIRECTORY} from "../../lib/constants";


export default function Index({ preview }) {


    return (
        <>
            <Layout preview={preview}>
                <Container>
                    <>
                        COSTUME TITLE<br />
                        [IMAGES]
                        <p>blurb about costume</p>
                        CONSTRUCTION NOTES
                        <p>construction notes</p>
                        [IMAGES]
                    </>
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

export async function getStaticPaths() {
    const allCostumes = await getAllCostumes()

    return {
        paths: [
            {  params: { costume: 'outlander' } },
        ],
        fallback: true,
    }
}
