import Container from '../components/container'
import MoreStories from '../components/post-components/more-stories'
import Layout from '../components/layout/layout'
import { getAllPostsForHome, getBlogSettings } from '../lib/api'
import PostPreview from "../components/post-components/post-preview";
import LayoutSideBar from '../components/layout/layout-sidebar';
import { useRouter } from 'next/router'
import {useEffect, useState} from "react";
import BlogLoading from "../components/post-components/blog-loading";
import { Transition } from '@headlessui/react'
import HomeLayout from "../components/layout/home-layout";

export default function Index({ allPosts: { edges }, preview, settings }) {
  const router = useRouter()
  const [searchPosts, setSearchPosts] = useState({edges: []})
  const [isLoading, setIsLoading] = useState(true)
  const searchQuery = router?.query?.s

  useEffect( () => {
    // if you're on the home page, but performing search
    if (searchQuery) {
      setIsLoading(true);
      async function getSearchPosts() {
        setSearchPosts({edges: []})
        const posts = await fetch(`/api/search?query=${searchQuery}`)
        const postsJSON = await posts.json()
        setSearchPosts(postsJSON)
        setIsLoading(false);
      }

      getSearchPosts()
    }
  }, [searchQuery])

  return (
    <>
      <Layout preview={preview}>
        <Container>
          <LayoutSideBar>
            <HomeLayout loading={isLoading} searchQuery={searchQuery} posts={searchQuery ? searchPosts : edges}/>
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
