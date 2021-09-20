import Head from 'next/head'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Layout from '../components/layout'
import SideBar from '../components/sidebar'
import { getAllPostsForHome, getBlogSettings } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import Header from "../components/header";
import PostPreview from "../components/post-preview";

export default function Index({ allPosts: { edges }, preview, settings }) {
  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1)
  console.log(edges);

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Header />
          <div className="flex flex-row flex-wrap py-4">
            <div className="w-full md:w-2/3 pt-1 px-2">
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
              </div>
              <div className="w-full md:w-1/3 px-2">
                <SideBar />
              </div>
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
