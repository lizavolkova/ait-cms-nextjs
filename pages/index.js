import Container from '../components/container'
import MoreStories from '../components/post-components/more-stories'
import Layout from '../components/layout/layout'
import { getAllPostsForHome, getBlogSettings } from '../lib/api'
import PostPreview from "../components/post-components/post-preview";
import LayoutSideBar from '../components/layout/layout-sidebar';
import { useRouter } from 'next/router'
import {useEffect, useState} from "react";

export default function Index({ allPosts: { edges }, preview, settings }) {
  const router = useRouter()
  const [searchPosts, setSearchPosts] = useState();
  const searchQuery = router?.query?.s;

  useEffect( () => {
    if (searchQuery) {
      async function getStuff() {
        const posts = await fetch(`/api/search?query=${searchQuery}`)
        const postsJSON = await posts.json();

        return postsJSON
      }

      getStuff().then((res) => setSearchPosts(res));
    }
    }, [searchQuery])

  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1)

  const renderSearchResults = () => {
    return (
        <>
          <div>SEARCH CALLED: {searchQuery}</div>
          {searchPosts && <MoreStories posts={searchPosts.edges} />}
        </>
    )
  }

  const renderDefaultHomePage = () => {
    return (
        <>
          {heroPost && (
            <PostPreview
                title={heroPost.title}
                coverImage={heroPost.featuredImage?.node}
                date={heroPost.date}
                author={heroPost.author?.node}
                slug={heroPost.slug}
                excerpt={heroPost.excerpt}
                categories={heroPost.categories}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </>
    )
  }

  return (
    <>
      <Layout preview={preview}>
        <Container>
          <LayoutSideBar>
            {searchQuery ? renderSearchResults() : renderDefaultHomePage()}
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
