import { useSiteContext } from '../../context/use-site'
import SideBarCard from '../post-components/sidebar-card'
import Link from 'next/link'
import TagCloud from '../tag-cloud'
import Search from '../search'
import InstagramFeed from "../instagram-feed";
import { BLOG_DIRECTORY } from "../../lib/constants"

export default function SideBar() {
  const siteSettings = useSiteContext()

  return (
    <div className="border-b border-accent-2 md:sticky top-20 ">
      <SideBarCard title="About Me">some text here</SideBarCard>
      <SideBarCard title="Instagram">
          <InstagramFeed />
      </SideBarCard>
      <SideBarCard title="Search">
        <Search />
      </SideBarCard>
      <SideBarCard title="Browse by category">
        {siteSettings?.categories?.edges.map((category) => {
          return (
            <div key={category.node.id} className="text-center">
              <Link href={`${BLOG_DIRECTORY}/${category.node.uri}`}>
                <a className="hover:underline">{category.node.name}</a>
              </Link>
            </div>
          )
        })}
      </SideBarCard>
      <SideBarCard title="Tags">
        {siteSettings?.tags && (
          <TagCloud tags={siteSettings.tags} minFont={9} maxFont={22} />
        )}
      </SideBarCard>
    </div>
  )
}
