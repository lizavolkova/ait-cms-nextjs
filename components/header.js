import Link from 'next/link'
import { useSiteContext } from '../context/use-site';

export default function Header() {
    const { siteSettings = {} } = useSiteContext();

    return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="hover:underline">{siteSettings?.generalSettings?.title}</a>
      </Link>
    </h2>
    )
}
