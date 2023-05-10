type wineProps = number[] | string[]

//Mean is the average of all the numbers in an array.
const mean = (arr : wineProps) => {
  let sum=0
for(let value of arr){
  sum+= +(value)
}
  return (sum / arr.length).toFixed(3);
};


//Median is the middle number in the sorted array of numbers
const median = (arr : wineProps) => {
  arr.sort((a, b) => +a - +b);
  const length = arr.length;
  if (arr.length % 2 === 0) return ((+arr[length / 2 - 1] + (+arr[length / 2])) / 2).toFixed(3);
    // if length is Even
  return (+arr[(length - 1) / 2]).toFixed(3); // if length is odd
};


//Mode is the number that occurs most often.
const mode = (arr : wineProps) => {
  let count = 0;
  let maxOccurrenceValue = arr[0];
  let map = new Map();
  for (let value of arr) {
    let val = map.get(value);
    if (map.has(value)) {
      map.set(value, val + 1);
    } else {
      map.set(value, 1);
    }
    if (count < val) {
      maxOccurrenceValue = +value;
      count = val;
    }
  }
  return maxOccurrenceValue;
};


//calculate gamma
const calculateGamma = (ash : number, hue : number, magnesium : number) => {
  return ((ash*hue)/magnesium).toFixed(3)
}

export {mean, median, mode,calculateGamma};
