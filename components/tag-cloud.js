import Link from 'next/link'

export default function TagCloud({ tags, minFont, maxFont }) {
  const normalize = (val, min, max) => {
    return ((val - min) / (max - min)) * (maxFont - minFont) + minFont
  }

  const counts = tags.edges.map((tag) => tag.node.count)
  const countMin = Math.min(...counts)
  const countMax = Math.max(...counts)

  return (
    <>
      {tags.edges.map((tag) => {
        const size = normalize(tag.node.count, countMin, countMax)
        return (
          <Link key={tag.node.id} href={tag.node.uri}>
            <a
              className="hover:underline inline-block"
              style={{ fontSize: `${size}pt` }}
            >
              {tag.node.name}&nbsp;
            </a>
          </Link>
        )
      })}
    </>
  )
}
