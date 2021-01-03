import assert from 'assert'
import findOutlier from './findOutlier.js'

// describe('Given an array of integers that is compromised of either only even or odd numbers, save for one number, return an array without that single number', () => {
//     it('removes odds', () => {
//       const result = findOutlier([0,1,2] )
//       assert.deepStrictEqual(result, [0,2] )
//     })
//     it('removes evens', () => {
//       const result = findOutlier([1,2,3])
//       assert.deepStrictEqual(result, [1,3])
//     })
// })
describe('Given an array of integers that is compromised of either only even or odd numbers, save for one number, return that number', () => {
    it('returns 1', () => {
      const result = findOutlier([0,1,2] )
      assert.deepStrictEqual(result, 1 )
    })
    it('returns 2', () => {
      const result = findOutlier([1,2,3])
      assert.deepStrictEqual(result, 2)
    })
})