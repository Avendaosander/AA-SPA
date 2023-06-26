import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUser } from '../hooks/useUser'
import { UserContext } from '../context/userContext'
import { register } from '../services/register'
import { BsEnvelopeFill, BsLockFill, BsPersonFill } from 'react-icons/bs'

function Register() {
   const navegar = useNavigate()
   const [confirmPassword, setConfirmPassword] = useState('')
   const { setUser } = useContext(UserContext)
   const { user, handleChange } = useUser()

   const handleSubmit = async e => {
      e.preventDefault()
      if (user.username.trim() === '')
         return console.error('El campo username no puede estar vacio')
      if (user.email.trim() === '')
         return console.error('El campo email no puede estar vacio')
      if (user.password.trim() === '')
         return console.error('El campo password no puede estar vacio')
      if (confirmPassword.trim() === '')
         return console.error('El campo Confirm Password no puede estar vacio')
      if (user.password !== confirmPassword)
         return console.error('Las contraseñas no son iguales')

      const userLoggedIn = await register(user)
      if (userLoggedIn?.messageError) return console.error(userLoggedIn)
      setUser(userLoggedIn.user)
      navegar('/services')
   }

   return (
      <main className='flex justify-center items-center my-32'>
         <form
            className='flex flex-col justify-around font-semibold w-[23rem] bg-emerald-300 ring-2 ring-emerald-600 p-5 text-xl rounded-xl'
            onSubmit={handleSubmit}
         >
            <h2 className='text-2xl font-bold'>Register</h2>
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
               htmlFor='email'
               className='text-left pt-4 flex items-center gap-1'
            >
               <BsEnvelopeFill />
               Email
            </label>
            <input
               type='email'
               name='email'
               value={user.email}
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
            <label
               htmlFor='confirmPassword'
               className='text-left pt-4 flex items-center gap-1'
            >
               <BsLockFill />
               Confirm Password
            </label>
            <input
               type='password'
               name='confirmPassword'
               value={confirmPassword}
               onChange={e => setConfirmPassword(e.target.value)}
               className='rounded-lg p-1 font-normal outline-none focus:ring-2 focus:ring-emerald-600'
            />
            <div className='flex justify-between items-center gap-5 py-4'>
               <p className='text-sm font-medium'>
                  Do you already have an account?
               </p>
               <Link
                  to={'/login'}
                  className='text-sm font-medium text-emerald-600'
               >
                  Sign In
               </Link>
            </div>
            <button className='bg-emerald-600 text-emerald-100 m-auto px-9 rounded-md'>
               Register
            </button>
         </form>
      </main>
   )
}

export default Register
