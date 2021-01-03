import assert from 'assert'
import filterList from './listFiltering.js'


// const test = (desc, fn) => {
//   console.log('----', desc)
//   try {
//     fn()
//   } catch (err) {
//     console.log(err.message)
//   }
// }

it('Return a new array with the strings filtered out', () => {
  const result = filterList([1,2,'a','b'])
  assert.deepStrictEqual(result, [1,2])
})
it('drops a and b' ,() => {
  const result1 = filterList([1,'a','b',0,15])
  assert.deepStrictEqual(result1, [1,0,15])
})
it('blah blah blah', () => {
  const result2 = filterList([1,2,'aasf','1','123',123])
  assert.deepStrictEqual(result2, [1,2,123])

})

