import Header from '../components/Header'

function Blog() {
   return (
      <>
         <Header
            texto={'Aqui encontrarás algunos articulos que te pueden interesar'}
         />
         <main className='flex flex-col gap-5 py-5 items-center'>
            <h2 className='font-bold text-2xl'>Articulos</h2>
            <section className='flex flex-col sm:flex-row justify-evenly gap-10 px-10'>
               <article className='flex flex-col gap-3 pb-4 bg-emerald-300 ring-2 ring-emerald-600 rounded-xl'>
                  <img
                     className='w-full rounded-t-xl object-cover object-center'
                     src='https://res.cloudinary.com/dtjgc9qlk/image/upload/v1687894818/AA%20SPA/MedlinePlus.png'
                     alt='Preview MedlinePlus'
                  />
                  <h3 className='font-semibold text-lg'>MedlinePlus</h3>
                  <a
                     href='https://medlineplus.gov/spanish/'
                     target='_blank'
                     rel='noopener noreferrer'
                     className='bg-emerald-600 text-emerald-100 m-auto px-6 text-lg rounded-md'
                  >
                     Ver más
                  </a>
               </article>
               <article className='flex flex-col gap-3 pb-4 bg-emerald-300 ring-2 ring-emerald-600 rounded-xl'>
                  <img
                     className='w-full rounded-t-xl object-cover object-center'
                     src='https://res.cloudinary.com/dtjgc9qlk/image/upload/v1687894840/AA%20SPA/WebConsultas.webp'
                     alt='Preview WebConsultas'
                  />
                  <h3 className='font-semibold text-lg'>WebConsultas</h3>
                  <a
                     href='https://www.webconsultas.com/'
                     target='_blank'
                     rel='noopener noreferrer'
                     className='bg-emerald-600 text-emerald-100 m-auto px-6 text-lg rounded-md'
                  >
                     Ver más
                  </a>
               </article>
               <article className='flex flex-col gap-3 pb-4 bg-emerald-300 ring-2 ring-emerald-600 rounded-xl'>
                  <img
                     className='w-full rounded-t-xl object-cover object-center'
                     src='https://res.cloudinary.com/dtjgc9qlk/image/upload/v1687894852/AA%20SPA/Who.webp'
                     alt='Preview Who'
                  />
                  <h3 className='font-semibold text-lg'>Who</h3>
                  <a
                     href='https://www.who.int/es/'
                     target='_blank'
                     rel='noopener noreferrer'
                     className='bg-emerald-600 text-emerald-100 m-auto px-6 text-lg rounded-md'
                  >
                     Ver más
                  </a>
               </article>
            </section>
            <h2 className='font-bold text-2xl'>Consejos</h2>
            <section className='flex flex-col justify-center items-center text-base sm:text-lg md:text-xl'>
               <article className='bg-emerald-200 p-10 flex flex-col sm:flex-row justify-between items-center sm:text-left gap-5 font-medium'>
                  <img
                     className='rounded-lg w-[200px] md:w-[250px]'
                     src='https://res.cloudinary.com/dtjgc9qlk/image/upload/v1687894390/AA%20SPA/Hidratacion_xxirp9.webp'
                     alt='Botella de agua'
                  />
                  <p>
                     Hidratación interna y externa: Beber suficiente agua es esencial para mantener tu piel hidratada desde adentro. Además, aprovecha los tratamientos hidratantes disponibles en el spa, como envolturas corporales o mascarillas faciales, para nutrir tu piel y mantenerla radiante.
                  </p>
               </article>
               <article className='p-10 flex flex-col-reverse sm:flex-row justify-between items-center sm:text-right gap-5 font-medium'>
                  <p>
                     Cuidado de la piel diario: Establece una rutina de cuidado de la piel que incluya limpieza, tonificación e hidratación. Utiliza productos adecuados para tu tipo de piel y asegúrate de limpiar tu rostro antes de acostarte para eliminar cualquier residuo de maquillaje o suciedad acumulada durante el día.
                  </p>
                  <img
                     className='rounded-lg w-[200px] md:w-[250px]'
                     src='https://res.cloudinary.com/dtjgc9qlk/image/upload/v1687491491/AA%20SPA/Home_2_ylv9ku.webp'
                     alt='Tratamiento facial'
                  />
               </article>
               <article className='bg-emerald-200 p-10 flex flex-col sm:flex-row justify-between items-center sm:text-left gap-5 font-medium'>
                  <img
                     className='rounded-lg w-[200px] md:w-[250px]'
                     src='https://res.cloudinary.com/dtjgc9qlk/image/upload/v1687894390/AA%20SPA/Solar_xofqku.webp'
                     alt='Protector Solar'
                  />
                  <p>
                     Protección solar: No subestimes la importancia de proteger tu piel del sol. Aplica protector solar de amplio espectro todos los días, incluso en días nublados. Además, considera usar sombreros y gafas de sol para proteger tu rostro de los rayos dañinos
                  </p>
               </article>
               <article className='p-10 flex flex-col-reverse sm:flex-row justify-between items-center sm:text-right gap-5 font-medium'>
                  <p>
                     Alimentación saludable: Una dieta equilibrada y rica en nutrientes es fundamental para mantener una piel saludable. Incorpora alimentos frescos, frutas, verduras y proteínas magras en tu dieta para obtener vitaminas y minerales esenciales. Evita los alimentos procesados y reduce el consumo de azúcar y alimentos grasos.
                  </p>
                  <img
                     className='rounded-lg w-[200px] md:w-[250px]'
                     src='https://res.cloudinary.com/dtjgc9qlk/image/upload/v1687894390/AA%20SPA/Saludable_xtjccr.webp'
                     alt='Alimentos Saludables'
                  />
               </article>
               <article className='bg-emerald-200 p-10 flex flex-col sm:flex-row justify-between items-center sm:text-left gap-5 font-medium'>
                  <img
                     className='rounded-lg w-[200px] md:w-[250px]'
                     src='https://res.cloudinary.com/dtjgc9qlk/image/upload/v1687894389/AA%20SPA/Dormir_rfdmoc.webp'
                     alt='Reloj'
                  />
                  <p>
                     Descanso adecuado: No subestimes el poder del descanso. Duerme lo suficiente para permitir que tu cuerpo se recupere y repare. El sueño adecuado ayuda a reducir la aparición de ojeras, mejora la elasticidad de la piel y promueve un aspecto radiante.
                  </p>
               </article>
            </section>
            <h2 className='font-bold text-2xl'>Recetas</h2>
            <section className='flex flex-col sm:flex-row justify-evenly gap-10 px-10'>
               <article className='flex flex-col gap-3 pb-4 bg-emerald-300 ring-2 ring-emerald-600 rounded-xl'>
                  <img
                     className='w-full rounded-t-xl object-cover object-center'
                     src='https://res.cloudinary.com/dtjgc9qlk/image/upload/v1687894880/AA%20SPA/LibroRecetas.webp'
                     alt='Preview LibroRecetas'
                  />
                  <h3 className='font-semibold text-lg'>Libro de Recetas</h3>
                  <a
                     href='https://www.mhswi.com/content/dam/centene/healthlibrary/health-books/recipes-route-to-health-spa.pdf'
                     target='_blank'
                     rel='noopener noreferrer'
                     className='bg-emerald-600 text-emerald-100 m-auto px-6 text-lg rounded-md'
                  >
                     Ver más
                  </a>
               </article>
               <article className='flex flex-col gap-3 pb-4 bg-emerald-300 ring-2 ring-emerald-600 rounded-xl'>
                  <img
                     className='w-full rounded-t-xl object-cover object-center'
                     src='https://res.cloudinary.com/dtjgc9qlk/image/upload/v1687894896/AA%20SPA/FrutoTerapia.png'
                     alt='Preview FrutoTerapia'
                  />
                  <h3 className='font-semibold text-lg'>FrutoTerapia</h3>
                  <a
                     href='https://thetaishotels.com/es/10-recetas-de-frutoterapia-para-10-objetivos/'
                     target='_blank'
                     rel='noopener noreferrer'
                     className='bg-emerald-600 text-emerald-100 m-auto px-6 text-lg rounded-md'
                  >
                     Ver más
                  </a>
               </article>
               <article className='flex flex-col gap-3 pb-4 bg-emerald-300 ring-2 ring-emerald-600 rounded-xl'>
                  <img
                     className='w-full rounded-t-xl object-cover object-center'
                     src='https://res.cloudinary.com/dtjgc9qlk/image/upload/v1687894915/AA%20SPA/RecetasVerano.png'
                     alt='Preview RecetasVerano'
                  />
                  <h3 className='font-semibold text-lg'>Recetas para el verano</h3>
                  <a
                     href='https://www.aarp.org/espanol/salud/vida-saludable/info-2020/recetas-de-verano.html'
                     target='_blank'
                     rel='noopener noreferrer'
                     className='bg-emerald-600 text-emerald-100 m-auto px-6 text-lg rounded-md'
                  >
                     Ver más
                  </a>
               </article>
            </section>
         </main>
      </>
   )
}

export default Blog
