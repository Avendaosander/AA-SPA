import Header from '../components/Header'
import HOME1 from '../assets/Home 1.jpg'
import HOME2 from '../assets/Home 2.jpg'

function Blog() {
   return (
      <>
         <Header
            texto={'Aqui encontrarás algunos articulos que te pueden interesar'}
         />
         <main className='flex flex-col gap-5 py-5 items-center'>
            <h2 className='font-bold text-2xl'>Articulos</h2>
            <section className='flex justify-evenly gap-5 container'>
               <article className='flex flex-col gap-2 p-5 pb-3 bg-emerald-300 ring-2 ring-emerald-600 rounded-xl'>
                  {/* <iframe
                     src='https://medlineplus.gov/spanish/'
                     className='w-full rounded-t-xl object-cover object-center'
                  ></iframe> */}
                  <h3 className='font-medium text-lg'>MedlinePlus</h3>
                  <a
                     href='https://medlineplus.gov/spanish/'
                     target='_blank'
                     rel='noopener noreferrer'
                     className='bg-emerald-600 text-emerald-100 m-auto px-6 text-lg rounded-md'
                  >
                     Ver más
                  </a>
               </article>
               <article className='flex flex-col gap-2 p-5 pb-3 bg-emerald-300 ring-2 ring-emerald-600 rounded-xl'>
                  {/* <iframe
                     src='https://www.webconsultas.com/'
                     className='w-full rounded-t-xl object-cover object-center'
                  ></iframe> */}
                  <h3 className='font-medium text-lg'>WebConsultas</h3>
                  <a
                     href='https://www.webconsultas.com/'
                     target='_blank'
                     rel='noopener noreferrer'
                     className='bg-emerald-600 text-emerald-100 m-auto px-6 text-lg rounded-md'
                  >
                     Ver más
                  </a>
               </article>
               <article className='flex flex-col gap-2 p-5 pb-3 bg-emerald-300 ring-2 ring-emerald-600 rounded-xl'>
                  {/* <iframe
                     src='https://www.who.int/es/'
                     className='w-full rounded-t-xl object-cover object-center'
                  ></iframe> */}
                  <h3 className='font-medium text-lg'>Who</h3>
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
            <section>
               <article className='bg-emerald-200 p-10 flex justify-between items-center text-left gap-5 text-xl font-medium'>
                  <img
                     className='rounded-lg'
                     src={HOME1}
                     alt='Imagen de chica flotando en el agua'
                     width={250}
                  />
                  <p>
                     Sumérgete en un oasis de tranquilidad en nuestro Spa de
                     Relajación Zen Garden. Aquí encontrarás el equilibrio
                     perfecto entre el cuerpo y la mente, donde podrás
                     desconectar del estrés diario y rejuvenecer tu espíritu.
                     Nuestro enfoque holístico te brindará una experiencia
                     transformadora que te dejará renovado y revitalizado.
                  </p>
               </article>
               <article className='p-10 flex justify-between items-center text-right gap-5 text-xl font-medium'>
                  <p>
                     Descubre nuestras experiencias únicas diseñadas para
                     satisfacer todas tus necesidades de relajación. Desde
                     masajes terapéuticos y tratamientos faciales hasta baños de
                     aromaterapia y sesiones de meditación, nuestro equipo de
                     profesionales altamente capacitados y dedicados se
                     asegurará de brindarte un servicio excepcional y
                     personalizado.
                  </p>
                  <img
                     className='rounded-lg'
                     src={HOME2}
                     alt='Imagen de tratamiento facial'
                     width={250}
                  />
               </article>
               <article className='bg-emerald-200 p-10 flex justify-between items-center text-left gap-5 text-xl font-medium'>
                  <img
                     className='rounded-lg'
                     src={HOME1}
                     alt='Imagen de chica flotando en el agua'
                     width={250}
                  />
                  <p>
                     Sumérgete en un oasis de tranquilidad en nuestro Spa de
                     Relajación Zen Garden. Aquí encontrarás el equilibrio
                     perfecto entre el cuerpo y la mente, donde podrás
                     desconectar del estrés diario y rejuvenecer tu espíritu.
                     Nuestro enfoque holístico te brindará una experiencia
                     transformadora que te dejará renovado y revitalizado.
                  </p>
               </article>
            </section>
            <h2 className='font-bold text-2xl'>Recetas</h2>
            <section className='flex justify-evenly gap-5 container'>
               <article className='flex flex-col gap-2 p-5 pb-3 bg-emerald-300 ring-2 ring-emerald-600 rounded-xl'>
                  {/* <iframe
                     src='https://www.mhswi.com/content/dam/centene/healthlibrary/health-books/recipes-route-to-health-spa.pdf'
                     className='w-full rounded-t-xl object-cover object-center'
                  ></iframe> */}
                  <h3 className='font-medium text-lg'>Libro de Recetas</h3>
                  <a
                     href='https://www.mhswi.com/content/dam/centene/healthlibrary/health-books/recipes-route-to-health-spa.pdf'
                     target='_blank'
                     rel='noopener noreferrer'
                     className='bg-emerald-600 text-emerald-100 m-auto px-6 text-lg rounded-md'
                  >
                     Ver más
                  </a>
               </article>
               <article className='flex flex-col gap-2 p-5 pb-3 bg-emerald-300 ring-2 ring-emerald-600 rounded-xl'>
                  {/* <iframe
                     src='https://thetaishotels.com/es/10-recetas-de-frutoterapia-para-10-objetivos/'
                     className='w-full rounded-t-xl object-cover object-center'
                  ></iframe> */}
                  <h3 className='font-medium text-lg'>FrutoTerapia</h3>
                  <a
                     href='https://thetaishotels.com/es/10-recetas-de-frutoterapia-para-10-objetivos/'
                     target='_blank'
                     rel='noopener noreferrer'
                     className='bg-emerald-600 text-emerald-100 m-auto px-6 text-lg rounded-md'
                  >
                     Ver más
                  </a>
               </article>
               <article className='flex flex-col gap-2 p-5 pb-3 bg-emerald-300 ring-2 ring-emerald-600 rounded-xl'>
                  {/* <iframe
                     src='https://www.aarp.org/espanol/salud/vida-saludable/info-2020/recetas-de-verano.html'
                     className='w-full rounded-t-xl object-cover object-center'
                  ></iframe> */}
                  <h3 className='font-medium text-lg'>Recetas para el verano</h3>
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
