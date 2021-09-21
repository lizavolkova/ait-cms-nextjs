import {
  getBlogSettings,
  getAllCategories,
  getAllPostsByCategory
} from '../../lib/api'
import Layout from "../../components/layout/layout";
import Container from "../../components/container";
import Header from "../../components/layout/header";
import AllPosts from "../../components/layout/all-posts";

export default function Post({ allPosts: { edges }, preview, settings, params }) {

  return (
      <Layout preview={preview}>
        <Container>
          <Header />
          <div>category: {params.slug}</div>
            <AllPosts morePosts={edges}/>
        </Container>
      </Layout>
  )
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const settings = await getBlogSettings();
  const allPosts = await getAllPostsByCategory(preview, params.slug)


  return {
    props: { allPosts, preview, settings, params }
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllCategories()

  return {
    paths: allPosts.edges.map(({ node }) => `/category/${node.slug}`) || [],
    fallback: true,
  }
}
