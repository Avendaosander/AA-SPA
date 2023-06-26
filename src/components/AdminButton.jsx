import { useContext } from 'react'
import { UserContext } from '../context/userContext'

const AdminButton = () => {
   const { adminMode, toggleAdminMode } = useContext(UserContext)

   return (
      <div className='flex items-center'>
         <span className='mr-2'>Admin Mode</span>
         <label
            htmlFor='admin-switch'
            className='flex items-center cursor-pointer'
         >
            <div className='relative'>
               <input
                  id='admin-switch'
                  type='checkbox'
                  className='hidden'
                  checked={adminMode}
                  onChange={toggleAdminMode}
               />
               <div
                  className={`absolute ${
                     adminMode ? 'right-0' : 'left-0'
                  } w-6 h-6 bg-white rounded-full transition`}
               ></div>
               <div
                  className={`w-12 h-6 rounded-full ${
                     adminMode ? 'bg-blue-500' : 'bg-gray-400'
                  }`}
               ></div>
            </div>
         </label>
      </div>
   )
}

export default AdminButton
