import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div className="p-2 mb-4">
      <div>
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}
      </div>
        <div className="text-lg date-tags text-center">
            <Date dateString={date} />
        </div>
      <h3 className="text-3xl mb-3 leading-snug text-center">
        <Link href={`/posts/${slug}`}>
          <a
            dangerouslySetInnerHTML={{ __html: title }}
          ></a>
        </Link>
      </h3>

      <div
        className="text-lg leading-relaxed mb-4"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
      {/*<Avatar author={author} />*/}
    </div>
  )
}
