
  function filterList(l) {
    let noStringsArray = []
    for (let i = 0; i < l.length; i++) {
      if(typeof l[i] !== 'string') {
        noStringsArray.push(l[i])
      }
    }
    return noStringsArray
  }

  export default filterList
