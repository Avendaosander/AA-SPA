export const addItemToState = (itemAdd, list) => {
   list.push(itemAdd)
   return list
}

export const udpateItemFromState = (itemUpdate, list) => {
   const indexItem = list.findIndex(item => item._id === itemUpdate._id)

   if (indexItem >= 0) {
      list[indexItem] = itemUpdate
      return list
   }
}

export const deleteItemFromState = (itemDelete, list) => {
   const indexItem = list.findIndex(item => item._id === itemDelete._id)

   if (indexItem >= 0) {
     list.splice(indexItem, 1)
     return list
   }
}

export const truncatedText = (texto) => {
   // Numero limite para truncar
   const limit = 150

   // Obtiene las primeras 200 palabras
   const truncatedResult = texto.slice(0, limit);
   
   // Agregar los tres puntos suspensivos si el texto es mayor del limite
   return truncatedResult.length < limit ? truncatedResult : `${truncatedResult}...`;
}