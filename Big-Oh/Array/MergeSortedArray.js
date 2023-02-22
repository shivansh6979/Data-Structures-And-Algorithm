// Personal Solution
function mergeSorted(arr1, arr2) {
  // input validation
  if (!arr1) {
    return arr2;
  }
  if (!arr2) {
    return arr1;
  }

  if (!arr1 && !arr2) {
    return;
  }

  const merging = [...arr1, ...arr2];

  for (let i = 0; i < arr1.length + arr2.length; i++) {
    let temp = 0;
    if (merging[i] > merging[i + 1]) {
      temp = merging[i];
      merging[i] = merging[i + 1];
      merging[i + 1] = temp;
    }
  }
  return merging;
}

const array1 = [0, 3, 4, 31];
const array2 = [4, 6, 30];
const merge = mergeSorted(array1, array2);
console.log(merge);
