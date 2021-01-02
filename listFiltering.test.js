import assert from 'assert'
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
  const result1 = filterList([1,'a','b',0,15])
  const result2 = filterList([1,2,'aasf','1','123',123])

  // assert.strictEqual(result[0], 1)
  // assert.strictEqual(result[1], 2)
  assert.deepStrictEqual(result, [1,2])
  assert.deepStrictEqual(result1, [1,0,15])
  assert.deepStrictEqual(result2, [1,2,123])




})