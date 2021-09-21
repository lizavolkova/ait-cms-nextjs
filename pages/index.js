import Head from 'next/head'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Layout from '../components/layout/layout'
import SideBar from '../components/layout/sidebar'
import { getAllPostsForHome, getBlogSettings } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import Header from "../components/layout/header";
import PostPreview from "../components/post-preview";
import LayoutSideBar from '../components/layout/layout-sidebar';

export default function Index({ allPosts: { edges }, preview, settings }) {
  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1)

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Header />
          <LayoutSideBar>
            {heroPost && (
                <PostPreview
                    title={heroPost.title}
                    coverImage={heroPost.featuredImage?.node}
                    date={heroPost.date}
                    author={heroPost.author?.node}
                    slug={heroPost.slug}
                    excerpt={heroPost.excerpt}
                />

            )}
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </LayoutSideBar>
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
