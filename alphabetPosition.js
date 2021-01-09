const alphabetPosition = (text) => {
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  const textArray = text.split('')
  let positions = ""
  for (let i = 0; i < textArray.length; i++) {
    positions += alphabet.filter(letter => {
      letter.toLowerCase() === textArray[i]
      return alphabet.indexOf(letter)
    })
  }
  return positions
}

export default alphabetPosition