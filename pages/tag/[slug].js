import { getBlogSettings, getAllTags, getAllPostsByTag } from '../../lib/api'
import AllPosts from '../../components/layout/all-posts'
import Container from '../../components/container'
import Layout from '../../components/layout/layout'
import PostTransition from '../../components/post-components/posts-transition'

export default function Post({ allPosts = {}, preview, settings, params }) {
  const { edges } = allPosts

  return (
    <Layout preview={preview}>
      <Container>
        <div>tag: {params?.slug}</div>
        <PostTransition appear={true} show={edges && edges.length > 0}>
          <AllPosts morePosts={edges} />
        </PostTransition>
      </Container>
    </Layout>
  )
}
export async function getStaticProps({ params, preview = false, previewData }) {
  const settings = await getBlogSettings()
  const allPosts = await getAllPostsByTag(preview, params.slug)

  return {
    props: { allPosts, preview, settings, params },
  }
}

export async function getStaticPaths() {
  const allTags = await getAllTags()

  return {
    paths: allTags.edges.map(({ node }) => `/tag/${node.slug}`) || [],
    fallback: true,
  }
}
