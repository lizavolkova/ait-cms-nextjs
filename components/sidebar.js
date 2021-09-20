import {useSiteContext} from "../context/use-site";
import SideBarCard from './sidebar-card';

export default function SideBar() {
    const siteSettings = useSiteContext();

    return (
        <div className="border-b border-accent-2">
            <SideBarCard title="About Me">some text here</SideBarCard>
            <SideBarCard title="Instagram">some text here</SideBarCard>
            <SideBarCard title="Search">some text here</SideBarCard>
            <SideBarCard title="Browse by category">some text here</SideBarCard>
            <SideBarCard title="Tags">some text here</SideBarCard>
        </div>
    )
}
