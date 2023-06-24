import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRouter({ isAllowed, children, redirectTo = '/login'}) {
   if (!isAllowed) return <Navigate to={redirectTo}/> 
   return (
      <>
         {children ? children : <Outlet/>}
      </>
   )
}

export default ProtectedRouter