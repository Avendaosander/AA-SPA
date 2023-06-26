import { useContext } from 'react'
import { SpaContext } from '../context/spaContext'

export function useSpa() {
   const context = useContext(SpaContext)

   if (context === undefined) {
      throw new Error('useSpa must be used within a SpaProvider')
   }

   return context
}
