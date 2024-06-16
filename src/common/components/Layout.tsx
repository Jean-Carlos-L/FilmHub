import { ReactNode } from "react"
import ListaFav from "./ListaFav"
import { useSelector } from "react-redux"
import { RootState } from "@redux/store"

interface Props {
   children: ReactNode
}

function Layout({ children }: Props) {
   const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)

   return (
      <div id="layout" className="flex flex-col h-full flex-grow">
         {isAuthenticated && <ListaFav />}
         {children}
      </div>
   )
}

export default Layout