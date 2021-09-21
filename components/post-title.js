export default function PostTitle({ children }) {
  return (
    <h1
      className="text-2xl md:text-4xl lg:text-6xl  mb-6 text-center"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}
