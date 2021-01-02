import filterList from './listFiltering.js'

const test = (desc, fn) => {
  console.log('----', desc)
  try {
    fn()
  } catch (err) {
    console.log(err.message)
  }
}

test('Return a new array with the strings filtered out', () => {
  const result = filterList([1,2,'a','b'])
  if (result !== [1,2]) {
    throw new Error(`Expected to find [1,2] but found ${result}`)
  }

})