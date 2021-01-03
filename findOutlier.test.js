import assert from 'assert'
import findOutlier from './findOutlier.js'

it('Given an array of integers that is compromised of either only even or odd numbers, save for one number, return an array without that single number', () => {
  const result = findOutlier([0, 1, 2] )
  const result1 = findOutlier([1,2,3])
  // assert.deepStrictEqual(result, [0,2] )
  assert.deepStrictEqual(result1, [1,3])
})