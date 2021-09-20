import Container from './container'
import {useSiteContext} from "../context/use-site";

export default function Menu() {
    const siteSettings = useSiteContext();

    return (
        <div className="border-b bg-accent-1 border-accent-2">
            <Container>
                <nav className="flex items-center justify-center flex-wrap p-3">
                    <ul className="flex justify-between">
                    {siteSettings?.menu.menuItems.nodes.map(item => {
                        return (
                            <li key={item.id} className="mr-6">
                                {item.label}
                            </li>
                        )
                    })}
                    </ul>
                </nav>
            </Container>
        </div>
    )
}
