import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/userContext'
import { useUser } from '../hooks/useUser'
import { login } from '../services/login'
import { BsLockFill, BsPersonFill } from 'react-icons/bs'

function Login() {
   const navegar = useNavigate()
   const { setUser } = useContext(UserContext)
   const { user, handleChange } = useUser()

   const handleSubmit = async e => {
      e.preventDefault()
      if (user.username.trim() === '')
         return console.error('El campo username no puede estar vacio')
      if (user.password.trim() === '')
         return console.error('El campo password no puede estar vacio')

      const body = {
         username: user.username,
         password: user.password,
      }
      const userLoggedIn = await login(body)
      if(userLoggedIn?.messageError) return console.error(userLoggedIn)
      setUser(userLoggedIn)
      navegar('/services')
   }

   return (
      <main className='flex justify-center items-center mt-44'>
         <form
            className='flex flex-col justify-around font-semibold w-[23rem] bg-emerald-300 ring-2 ring-emerald-600 p-5 text-xl rounded-xl'
            onSubmit={handleSubmit}
         >
            <h2 className='text-2xl font-bold'>Login</h2>
            <label
               htmlFor='username'
               className='text-left pt-4 flex items-center gap-1'
            >
               <BsPersonFill />
               Username
            </label>
            <input
               type='text'
               name='username'
               autoFocus
               value={user.username}
               onChange={handleChange}
               className='rounded-lg p-1 font-normal outline-none focus:ring-2 focus:ring-emerald-600'
            />
            <label
               htmlFor='password'
               className='text-left pt-4 flex items-center gap-1'
            >
               <BsLockFill />
               Password
            </label>
            <input
               type='password'
               name='password'
               value={user.password}
               onChange={handleChange}
               className='rounded-lg p-1 font-normal outline-none focus:ring-2 focus:ring-emerald-600'
            />
            <div className='flex justify-between items-center gap-5 py-4'>
               <p className='text-sm font-medium'>
                  You do not have an account?
               </p>
               <Link
                  to={'/register'}
                  className='text-sm font-medium text-emerald-600'
               >
                  Create Account
               </Link>
            </div>
            <button className='bg-emerald-600 text-emerald-100 m-auto px-9 rounded-md'>
               Login
            </button>
         </form>
      </main>
   )
}

export default Login
