import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../../components/container'
import PostBody from '../../../components/post-components/post-body'
import MoreStories from '../../../components/post-components/more-stories'
import Header from '../../../components/layout/header'
import PostHeader from '../../../components/post-components/post-header'
import SectionSeparator from '../../../components/section-separator'
import Layout from '../../../components/layout/layout'
import {
  getAllPostsWithSlug,
  getPostAndMorePosts,
  getBlogSettings,
} from '../../../lib/api'
import PostTitle from '../../../components/post-components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../../lib/constants'
import Tags from '../../../components/post-components/tags'
import PostPreview from '../../../components/post-components/post-preview'
import LayoutSideBar from '../../../components/layout/layout-sidebar'
import { BLOG_DIRECTORY } from '../../../lib/constants'

export default function Post({ settings, post, posts, preview }) {
  const router = useRouter()
  const morePosts = posts?.edges

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <LayoutSideBar>
            <>
              <article>
                <Head>
                  <title>
                    {post.title} | Next.js Blog Example with {CMS_NAME}
                  </title>
                  <meta
                    property="og:image"
                    content={post.featuredImage?.node?.sourceUrl}
                  />
                </Head>
                <PostHeader
                  title={post.title}
                  coverImage={post.featuredImage?.node}
                  date={post.date}
                  author={post.author?.node}
                  categories={post.categories}
                />
                <PostBody content={post.content} />
                <footer>
                  {/*{post.tags.edges.length > 0 && <Tags tags={post.tags} />}*/}
                </footer>
              </article>

              <SectionSeparator />
              {morePosts.length > 0 && <MoreStories posts={morePosts} />}
            </>
          </LayoutSideBar>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const settings = await getBlogSettings()
  const data = await getPostAndMorePosts(params.slug, preview, previewData)

  return {
    props: {
      settings,
      preview,
      post: data.post,
      posts: data.posts,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts.edges.map(({ node }) => `${BLOG_DIRECTORY}/posts/${node.slug}`) || [],
    fallback: true,
  }
}
