// Naive approach
function recuring(arr) {
  let rec;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] === arr[j]) {
        rec = arr[i];
      }
    }
  }
  return rec;
}

const arr1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
console.log("First recuring number is ", recuring(arr1));
