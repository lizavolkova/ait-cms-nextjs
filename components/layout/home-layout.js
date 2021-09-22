import MoreStories from '../post-components/more-stories'
import PostPreview from "../post-components/post-preview";
import BlogLoading from "../post-components/blog-loading";
import PostTransition from "../post-components/posts-transition";

export default function HomeLayout({loading, searchQuery, posts}) {

    if (loading && searchQuery) {
        return <><div>SEARCH CALLED: {searchQuery}</div><BlogLoading /></>
    }

    if (searchQuery) {
        return (
            <>
                <div>SEARCH CALLED: {searchQuery}</div>
                <PostTransition appear={true} show={!loading} >
                    <MoreStories posts={posts.edges} />
                </PostTransition>
            </>
        )
    }

    const heroPost = posts[0]?.node
    const morePosts = posts.slice(1)

    return (
        <PostTransition appear={true} show={!searchQuery} >
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
        </PostTransition>
    )

}
