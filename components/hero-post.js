import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import Link from 'next/link'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}
      </div>
      <div className="md:grid md:grid-cols-1 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
        <div>
          <div className="mb-4 md:mb-0 text-lg date-tags center">
            <Date dateString={date} />
          </div>
          <h3 className="center mb-4 text-4xl lg:text-4xl leading-tight">
            <Link href={`/posts/${slug}`}>
              <a
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </Link>
          </h3>
        </div>
        <div>
          <div
            className="text-lg leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
          <Avatar author={author} />
        </div>
      </div>
    </section>
  )
}
