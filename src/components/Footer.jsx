import { useLocation } from 'react-router-dom'
import GithubLogo from '../assets/Github.png'

function Footer() {
   const { pathname } = useLocation()
   const isPathAuth = pathname === '/login' || pathname === '/register'
   const isPathReservation = pathname === '/reservations'
   return (
      <footer
         className={`${isPathAuth && 'hidden'} ${isPathReservation && 'fixed bottom-0'} bg-emerald-600 w-full h-20 flex flex-col sm:flex-row justify-around items-center text-emerald-100 md:text-xl font-medium`}
      >
         <section className='flex items-center justify-center gap-5'>
            <h3>Desarrollador:</h3>
            <div className='flex items-center justify-center gap-1'>
               <p>Alexander Avendaño</p>
               <a
                  href='http://github.com/avendaosander'
                  target='_blank'
                  rel='noopener noreferrer'
               >
                  <img
                     src={GithubLogo}
                     alt='Github Logo'
                     className='hover:scale-110 w-7 sm:w-9'
                  />
               </a>
            </div>
         </section>
         <section className='flex items-center justify-center gap-5'>
            <p>SPA Landing Page</p>
            <div className='flex items-center justify-center gap-1 border-l-2 border-l-emerald-100 pl-4'>
               <p>Copyright ©️</p> <strong>2023</strong>
            </div>
         </section>
      </footer>
   )
}

export default Footer
