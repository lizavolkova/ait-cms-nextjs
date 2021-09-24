import Container from '../components/container'
import Layout from '../components/layout/layout'
import { getAllPostsForHome, getBlogSettings } from '../lib/api'
import LayoutSideBar from '../components/layout/layout-sidebar'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import HomeLayout from '../components/layout/home-layout'


export default function Index({ allPosts: { edges }, preview, settings }) {
  const router = useRouter()
  const [searchPosts, setSearchPosts] = useState({ edges: [] })
  const [isLoading, setIsLoading] = useState(true)
  const searchQuery = router?.query?.s

  useEffect(() => {
    // if you're on the home page, but performing search
    if (searchQuery) {
      setIsLoading(true)
      async function getSearchPosts() {
        setSearchPosts({ edges: [] })
        const posts = await fetch(`http://localhost:3000/api/search?query=${searchQuery}`)
        const postsJSON = await posts.json()
        setSearchPosts(postsJSON)
        setIsLoading(false)
      }

      getSearchPosts()
    }
  }, [searchQuery])

  return (
    <>
      <Layout preview={preview}>
        <Container>
          <LayoutSideBar>
            <HomeLayout
              loading={isLoading}
              searchQuery={searchQuery}
              posts={searchQuery ? searchPosts : edges}
            />
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
