export default function SidebarLayout({ menu, children, className = '', user, ...props }) {
    return (
        <div className="grid grid-cols-5">
            <nav {...props} className={"z-[1035] h-screen overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] dark:bg-zinc-800 ".concat(className)}>
                {menu}
            </nav>
            <div className="col-span-4">
                {children}
            </div>
        </div>

    );
}
