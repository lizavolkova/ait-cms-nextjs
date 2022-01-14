import {
  getBlogSettings,
  getAllCategories,
  getAllPostsByCategory,
  getAllPostsForHome,
} from '../../../lib/api'
import Layout from '../../../components/layout/layout'
import Container from '../../../components/container'
import AllPosts from '../../../components/layout/all-posts'
import PostTransition from '../../../components/post-components/posts-transition'
import { BLOG_DIRECTORY } from '../../../lib/constants'

export default function Post({ allPosts = {}, preview, settings, params }) {
  const { edges } = allPosts

  return (
    <Layout preview={preview}>
      <Container>
        <div>category: {params?.slug}</div>
        <PostTransition appear={true} show={edges && edges.length > 0}>
          <AllPosts morePosts={edges} />
        </PostTransition>
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const settings = await getBlogSettings()
  const allPosts = await getAllPostsByCategory(preview, params.slug)

  return {
    props: { allPosts, preview, settings, params },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllCategories()
  console.log(allPosts.edges.map(({ node }) => `${BLOG_DIRECTORY}/category/${node.slug}`) || [])

  return {
    paths: allPosts.edges.map(({ node }) => `${BLOG_DIRECTORY}/category/${node.slug}`) || [],
    fallback: true,
  }
}
