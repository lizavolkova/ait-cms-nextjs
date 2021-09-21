import LayoutSideBar from "./layout-sidebar";
import PostPreview from "../post-preview";
import MoreStories from "../more-stories";

export default function AllPosts({ preview, heroPost, morePosts }) {
    return (
        <LayoutSideBar>
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
            {morePosts.length > 0 && <MoreStories posts={morePosts} showHeader={heroPost}/>}
        </LayoutSideBar>
    )
}
