import { useRouter } from 'next/router'
import { BLOG_DIRECTORY } from "../lib/constants"

export default function Search() {
  const router = useRouter()

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    const searchQuery = e.target.search.value
    router.push(`${BLOG_DIRECTORY}/?s=${searchQuery}`)
    e.target.reset()
  }

  return (
    <form onSubmit={(e) => handleSearchSubmit(e)}>
      <div className="shadow flex">
        <input
          className="w-full rounded p-2"
          type="text"
          placeholder="Search..."
          name="search"
        />
        <button className="bg-white w-auto flex justify-end items-center text-blue-500 p-2 hover:text-blue-400">
          <i className="material-icons text-mainPink">search</i>
        </button>
      </div>
    </form>
  )
}
