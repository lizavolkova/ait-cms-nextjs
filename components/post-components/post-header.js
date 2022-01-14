import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import Categories from './categories'

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  categories,
}) {
    console.log(coverImage)
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-6 text-lg date-tags text-center">
        <Date dateString={date} />
        <Categories categories={categories} />
      </div>
      {/*<div className="hidden md:block md:mb-12">*/}
      {/*  <Avatar author={author} />*/}
      {/*</div>*/}
      <div className="mb-8 md:mb-8 sm:mx-0">
        {coverImage && <CoverImage title={title} coverImage={coverImage} />}
      </div>
      <div className="max-w-2xl mx-auto">
        {/*<div className="block md:hidden mb-6">*/}
        {/*  <Avatar author={author} />*/}
        {/*</div>*/}
      </div>
    </>
  )
}
