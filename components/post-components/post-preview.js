import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'
import Categories from './categories'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  categories,
}) {
  return (
    <div className="mb-4 p-0 md:p-2">
      <h3 className="text-2xl md:text-3xl mb-3 leading-snug text-center">
        <Link href={`/posts/${slug}`}>
          <a
            className="text-black"
            dangerouslySetInnerHTML={{ __html: title }}
          ></a>
        </Link>
      </h3>
      <div className="text-lg date-tags text-center mb-4">
        <Date dateString={date} />
        <Categories categories={categories} />
      </div>
      <div>
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}
      </div>
      <div
        className="text-lg leading-relaxed mb-4"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
      {/*<Avatar author={author} />*/}
    </div>
  )
}
