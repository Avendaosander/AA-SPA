import { useState, useEffect } from 'react'

const ErrorModal = ({error, setError}) => {
   const [showModal, setShowModal] = useState(true)

   useEffect(() => {
      const timer = setTimeout(() => {
         setShowModal(false)
         setError('')
      }, 2000)

      return () => clearTimeout(timer)
   }, [setError])

   return (
      <>
         {showModal && (
            <div className='fixed bottom-0 left-0 mb-4 ml-4 bg-rose-500 text-emerald-100 px-4 py-2 rounded-md shadow-md'>
               <p>{error}</p>
            </div>
         )}
      </>
   )
}

export default ErrorModal
