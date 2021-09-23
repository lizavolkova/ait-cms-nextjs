import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';

export default function CoverImage({ title, coverImage, slug }) {
    const [loaded, setLoaded] = useState(false);

    // Check if there is a small placeholder
    const sizes = coverImage.mediaDetails?.sizes
    let small_image;

    if (sizes) {
        const test = sizes.reduce((prev, curr) => {
            return prev.fileSize < curr.fileSize ? prev : curr
        });

        small_image = test.sourceUrl;
    }

    //TODO: see if this can be refactored to just use Tailwind
  const image = (
    <Image
      width={coverImage?.mediaDetails?.width ?? 2000}
      height={coverImage?.mediaDetails?.height ?? 1000}
      alt={`Cover Image for ${title}`}
      src={coverImage?.sourceUrl}
      blurDataURL={small_image}
      placeholder="blur"
      onLoadingComplete={() => setLoaded(true)}
      className={cn('filter shadow-small rounded-sm ',
          {
              'hover:shadow-medium transition-shadow duration-200': slug,
              'opacity-50': !loaded,
              'unblur opacity-100': loaded,
          }
      )}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title} className="cover-image">{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
