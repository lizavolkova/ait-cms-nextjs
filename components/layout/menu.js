import Container from '../container'
import { useSiteContext } from "../../context/use-site";
import cn from 'classnames'
import Image from 'next/image'
import Search from "../search";

export default function Menu({ sticky }) {
    const siteSettings = useSiteContext();


    return (
        <div className="border-b bg-accent-1 border-accent-2 lg:sticky top-0 z-10">
            <Container>
                <nav className="flex items-center justify-center flex-wrap py-3">
                    <div className={cn('w-52 transition-opacity duration-400 hidden lg:block', sticky? 'opacity-1' : 'opacity-0')}>
                        <div className="w-2/3 sm:w-40">
                            <Image
                                width={2000}
                                height={440}
                                src={siteSettings?.siteLogo.sourceUrl}
                                alt={siteSettings?.generalSettings.title}
                            />
                        </div>
                    </div>
                    <div className="flex flex-grow justify-center">
                        <ul className="w-80 flex justify-center">
                            {siteSettings?.menu.menuItems.nodes.map(item => {
                                return (
                                    <li key={item.id} className="mx-1 text-center">
                                        {item.label}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className={cn('w-52 transition-opacity duration-400 hidden lg:block', sticky? 'opacity-1' : 'opacity-0')}>
                       <Search />
                    </div>
                </nav>
            </Container>
        </div>
    )
}
