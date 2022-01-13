import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { COLOR_API_URL } from '../../lib/constants'

export default function CoverImage({ title, coverImage, slug }) {
  const anchorRef = useRef(null);
  const [loaded, setLoaded] = useState(false)
  const [dominantColor, setDominantColor] = useState('#CCCCFF')

  useEffect(() => {
    // Check if there is a small placeholder
    const sizes = coverImage.mediaDetails?.sizes
    let small_image

    if (sizes) {
      const test = sizes.reduce((prev, curr) => {
        return prev.fileSize < curr.fileSize ? prev : curr
      })

      small_image = test.sourceUrl
      console.log(small_image)

      //fetch dominant color from image
      fetch(COLOR_API_URL, {
          method: 'POST',
          body: JSON.stringify({
            url: small_image
          })
      }).then(res => res.json()).then(color => {
        setDominantColor(color.hex)

        // next/image doesn't support dynamic style tag
        // tailwind doesn't support dynamic colors at runtime
        // facepalm have to resort to refs for the placeholder dominant color image
        if (anchorRef.current) {
          const imageTag = (anchorRef.current).getElementsByTagName('img')[0];
          imageTag.style.backgroundColor = color.hex;
        }

      });
    }
  }, []);

  const image = (
    <Image
      width={coverImage?.mediaDetails?.width ?? 2000}
      height={coverImage?.mediaDetails?.height ?? 1000}
      alt={`Cover Image for ${title}`}
      src={coverImage?.sourceUrl}
      placeholder="empty"
      layout="responsive"
      onLoadingComplete={() => setLoaded(true)}
      className={cn(`filter shadow-small rounded-sm`, {
        'hover:shadow-medium transition-shadow duration-200': slug,
        'unblur': loaded,
      })}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a
              aria-label={title} className="cover-image" ref={anchorRef}>
            {image}
          </a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
