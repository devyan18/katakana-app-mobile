export const getRandomItemFromArray = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

export const setRandomOrderArray = (array) => {
  const randomOrderArray = []
  const arrayCopy = [...array]

  while (arrayCopy.length > 0) {
    const randomIndex = Math.floor(Math.random() * arrayCopy.length)
    randomOrderArray.push(arrayCopy[randomIndex])
    arrayCopy.splice(randomIndex, 1)
  }

  return randomOrderArray
}
