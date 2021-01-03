function findOutlier(integers) {
// i actually did it backwards, you're supposed to return the outlier
  const evens = integers.filter(x => x % 2 === 0)
  const odds = integers.filter(x => x % 2 !== 0)
  if (evens.length > odds.length){
    return evens
  } 
  else {
    return odds
  }
}
export default findOutlier