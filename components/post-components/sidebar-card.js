export default function SideBarCard({ title, children }) {
  return (
    <div className="bg-accent-1 border-grey-100 border p-8 mx-0 my-5 sm:mx-5">
      <h3 className="uppercase mb-5 border-b text-xl">{title}</h3>
      <div>{children}</div>
    </div>
  )
}
