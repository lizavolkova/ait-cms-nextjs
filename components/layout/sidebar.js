import {useSiteContext} from "../../context/use-site"
import SideBarCard from '../sidebar-card'
import Link from 'next/link'

export default function SideBar() {
    const siteSettings = useSiteContext();

    return (
        <div className="border-b border-accent-2">
            <SideBarCard title="About Me">some text here</SideBarCard>
            <SideBarCard title="Instagram">some text here</SideBarCard>
            <SideBarCard title="Search">some text here</SideBarCard>
            <SideBarCard title="Browse by category">
                {
                    siteSettings?.categories?.edges.map(category => {
                        return (
                            <div key={category.node.id} className="text-center">
                                <Link href={category.node.uri}>
                                    <a className="hover:underline">{category.node.name}</a>
                                </Link>
                            </div>
                        )
                    })
                }
            </SideBarCard>
            <SideBarCard title="Tags">
                {
                    siteSettings?.tags?.edges.map(tag => {
                        return (
                            <Link key={tag.node.id} href={tag.node.uri}>
                                <a className="hover:underline inline-block">{tag.node.name}&nbsp;</a>
                            </Link>
                        )
                    })
                }
            </SideBarCard>
        </div>
    )
}
