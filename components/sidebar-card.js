export default function SideBarCard({ title, children }) {
    return (
        <div className="bg-accent-1 border-accent-2 p-8 m-5">
            <h3 className="uppercase mb-5 border-b text-xl">{title}</h3>
            <div>{children}</div>
        </div>
    )
}