import SideBar from './sidebar'

export default function LayoutSideBar({ children }) {
  return (
    <div className="flex flex-row flex-wrap py-4">
      <div className="w-full lg:w-2/3 pt-1 px-0 md: px-2">{children}</div>
      <div className="w-full lg:w-1/3 px-0 md: px-2">
        <SideBar />
      </div>
    </div>
  )
}
