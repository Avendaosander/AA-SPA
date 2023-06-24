function Header({ texto, heigth = 'h-64' }) {
   return (
      <header className={`relative bg-HOME bg-cover bg-center ${heigth}`}>
         <div className='bg-black/50 absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center text-emerald-100 text-3xl font-semibold'>
            <h1>{texto}</h1>
         </div>
      </header>
   )
}

export default Header
