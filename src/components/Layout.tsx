import { ReactNode } from "react"
import Navbar from "./Navbar"

interface Props {
   children: ReactNode
}

function Layout({ children }: Props) {
   return (
      <div>
         <Navbar />
         {children}
      </div>
   )
}

export default Layout