import { Navigate, Outlet } from 'react-router-dom'
import { SpaProvider } from '../context/spaContext'

function ProtectedRouter({ isAllowed, children, redirectTo = '/login'}) {
   if (!isAllowed) return <Navigate to={redirectTo}/> 
   return (
      <SpaProvider>
         {children ? children : <Outlet/>}
      </SpaProvider>
   )
}

export default ProtectedRouter