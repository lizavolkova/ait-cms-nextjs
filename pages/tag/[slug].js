import {
  getBlogSettings,
  getAllTags,
  getAllPostsByTag
} from '../../lib/api'
import AllPosts from "../../components/layout/all-posts";
import Container from "../../components/container";
import Header from "../../components/layout/header";
import Layout from "../../components/layout/layout";

export default function Post({ allPosts: { edges }, preview, settings, params }) {
  return (
        <Layout preview={preview}>
          <Container>
            <Header />
            <div>tag: {params.slug}</div>
            <AllPosts morePosts={edges} />
          </Container>
        </Layout>
  )
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const settings = await getBlogSettings();
  const allPosts = await getAllPostsByTag(preview, params.slug)

  return {
    props: { allPosts, preview, settings, params }
  }
}

export async function getStaticPaths() {
  const allTags = await getAllTags();

  return {
    paths: allTags.edges.map(({ node }) => `/tag/${node.slug}`) || [],
    fallback: true,
  }
}
