import { ReactNode } from "react"
import Navbar from "./Navbar"

interface Props {
    children: ReactNode
}

function Layout({ children }: Props) {
    return (
    <div id="layout" className="flex flex-col">
        <Navbar />
        {children}
    </div>
    )
}

export default Layout