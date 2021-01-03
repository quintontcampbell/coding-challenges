function findOutlier(integers) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  if (integers.reduce(reducer) % integers.length === 0) {
    return integers.filter(x => x % 2 === 0)
  } 
  else {
    return integers.filter(x => x % 2 !== 0)
  }
}
export default findOutlier