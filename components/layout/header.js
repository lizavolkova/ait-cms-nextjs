import Link from 'next/link'
import Image from 'next/image'
import { useSiteContext } from '../../context/use-site';

export default function Header({element}) {
    const siteSettings = useSiteContext();

    return (
    <div ref={element} className="flex mb-4 md:mb-10 mt-8 justify-center items-center ">
      <Link href="/">
        <a className="w-2/3 sm:w-80" >
            <Image
                width={2000}
                height={440}
                src={siteSettings?.siteLogo.sourceUrl}
                alt={siteSettings?.generalSettings.title}
            />
        </a>

      </Link>
    </div>
    )
}
