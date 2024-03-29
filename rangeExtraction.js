// A format for expressing an ordered list of integers is to use a comma separated list of either

// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

function solution(list){
  let result = [];
  let currentRange = [];
  
  if (list.lenght === 0) return "";
  
  list.forEach(function checkForRange(number, index) {
  
    if (typeof number !== 'number') return;
    
    if (number + 1 !== list[index+1]) {
      if (currentRange.length === 0) {
       return result.push(number.toString());
      }
      if ( currentRange.length < 2) {
          currentRange.push(number);
          currentRange.forEach(function(num) {
          result.push(num.toString());
        })
      } else {
        let range = `${currentRange[0]}-${number}`;
        result.push(range.toString())
      }
      currentRange = [];
        
    } else {
      currentRange.push(number)
    }
    
  })
  return result.toString();
}
