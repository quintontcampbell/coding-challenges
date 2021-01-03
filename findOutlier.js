// function findOutlier(integers) {
//   const evens = integers.filter(x => x % 2 === 0)
//   const odds = integers.filter(x => x % 2 !== 0)
//   if (evens.length > odds.length){
//     return evens
//   } 
//   else {
//     return odds
//   }
// }
function findOutlier(integers) {
  const evens = integers.filter(x => x % 2 === 0)
  const odds = integers.filter(x => x % 2 !== 0)
  if (evens.length === 1) {
    return evens[0]
  }
  else return odds[0]
}
export default findOutlier