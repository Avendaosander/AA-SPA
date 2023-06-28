import { Navigate, Outlet } from 'react-router-dom'
import { SpaProvider } from '../context/spaContext'
import ErrorModal from './ErrorModal'

function ProtectedRouter({ isAllowed, children, redirectTo = '/login'}) {
   if (!isAllowed) return <Navigate to={redirectTo}/> 
   return (
      <SpaProvider>
         {children ? children : <Outlet/>}
         <ErrorModal/>
      </SpaProvider>
   )
}

export default ProtectedRouter