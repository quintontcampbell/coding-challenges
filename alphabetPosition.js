const alphabetPosition = (text) => {
  const alphabet = ['arraysamirite','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  const textArray = text.split('')
  let positions = ""
  for (let i = 0; i < textArray.length; i++) {
    let textLetter = textArray[i]
    let alphabetIndex = alphabet.findIndex(letter => letter === textLetter.toLowerCase())
    if (alphabetIndex !== (-1)) {
      positions += `${alphabetIndex} `
    }
  }
  return positions.trim()
}

export default alphabetPosition