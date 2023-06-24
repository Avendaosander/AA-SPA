import LOGO from '../assets/AA Spa.png'
import { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/userContext'
import { BsPower } from 'react-icons/bs'

function Navbar() {
   const navegar = useNavigate()
   const { user, setUser } = useContext(UserContext)

   const logout = () => {
      setUser(null)
      navegar('/login')
   }

   return (
      <nav className='bg-emerald-600 text-emerald-100 font-bold text-xl h-20 w-full flex justify-between items-center px-5'>
         <section>
            <NavLink to={'/'}>
               <img
                  src={LOGO}
                  alt='Logo AA-SPA'
                  className='h-20 hover:scale-110'
               />
            </NavLink>
         </section>
         <section className='flex justify-between gap-5'>
            {user ? (
               <>
                  <NavLink
                     to={'/services'}
                     className={({ isActive }) =>
                        isActive
                           ? 'bg-emerald-500/50 rounded-lg px-2 hover:bg-emerald-500'
                           : 'rounded-lg px-2 hover:bg-emerald-500'
                     }
                  >
                     Servicios
                  </NavLink>
                  <NavLink
                     to={'/reservations'}
                     className={({ isActive }) =>
                        isActive
                           ? 'bg-emerald-500/50 rounded-lg px-2 hover:bg-emerald-500'
                           : 'rounded-lg px-2 hover:bg-emerald-500'
                     }
                  >
                     Reservaciones
                  </NavLink>
                  <NavLink
                     to={'/blog'}
                     className={({ isActive }) =>
                        isActive
                           ? 'bg-emerald-500/50 rounded-lg px-2 hover:bg-emerald-500'
                           : 'rounded-lg px-2 hover:bg-emerald-500'
                     }
                  >
                     Blog
                  </NavLink>
                  {user.rol === 'Admin' && 
                     <NavLink
                        to={'/admin'}
                        className={({ isActive }) =>
                           isActive
                              ? 'bg-emerald-500/50 rounded-lg px-2 hover:bg-emerald-500'
                              : 'rounded-lg px-2 hover:bg-emerald-500'
                        }
                     >
                        Administrador
                     </NavLink>
                  }
                  <button
                     onClick={logout}
                     className='rounded-lg px-2 hover:bg-emerald-500 hover:text-emerald-950 flex items-center text-2xl'
                  >
                     <BsPower />
                  </button>
               </>
            ) : (
               <>
                  <NavLink
                     to={'/blog'}
                     className={({ isActive }) =>
                        isActive
                           ? 'bg-emerald-500/50 rounded-lg px-2 hover:bg-emerald-500'
                           : 'rounded-lg px-2 hover:bg-emerald-500'
                     }
                  >
                     Blog
                  </NavLink>
                  <NavLink
                     to={'/login'}
                     className={({ isActive }) =>
                        isActive
                           ? 'bg-emerald-500/50 rounded-lg px-2 hover:bg-emerald-500'
                           : 'rounded-lg px-2 hover:bg-emerald-500'
                     }
                  >
                     Login
                  </NavLink>
                  <NavLink
                     to={'/register'}
                     className={({ isActive }) =>
                        isActive
                           ? 'bg-emerald-500/50 rounded-lg px-2 hover:bg-emerald-500'
                           : 'rounded-lg px-2 hover:bg-emerald-500'
                     }
                  >
                     Register
                  </NavLink>
               </>
            )}
         </section>
      </nav>
   )
}

export default Navbar
