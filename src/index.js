
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const result = [];
  if (!matrix) return result
  for(let item = 0; item < matrix.length; item ++) {
      if (item % 2 === 0) {
          result.push(...matrix[item])
      } else {
          result.push(...matrix[item].reverse())
      }
  }
  return result
}
