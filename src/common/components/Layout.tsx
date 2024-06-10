import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

function Layout({ children }: Props) {
   return (
      <div id="layout" className="flex flex-col">
         {children}
      </div>
   )
}

export default Layout