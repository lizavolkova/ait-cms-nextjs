import { useSiteContext } from '../../context/use-site'
import SideBarCard from '../post-components/sidebar-card'
import Link from 'next/link'
import TagCloud from '../tag-cloud'
import Search from '../search'

export default function SideBar() {
  const siteSettings = useSiteContext()

  return (
    <div className="border-b border-accent-2 md:sticky top-20 ">
      <SideBarCard title="About Me">some text here</SideBarCard>
      <SideBarCard title="Instagram">some text here</SideBarCard>
      <SideBarCard title="Search">
        <Search />
      </SideBarCard>
      <SideBarCard title="Browse by category">
        {siteSettings?.categories?.edges.map((category) => {
          return (
            <div key={category.node.id} className="text-center">
              <Link href={category.node.uri}>
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
