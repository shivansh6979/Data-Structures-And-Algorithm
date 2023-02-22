// function commonFinder(arr1, arr2) {

//     for (let i = 0; i < arr1.length; i++) {
//       for (let j = 0; j < arr2.length; j++) {
//         if (arr1[i] == arr2[j]) {
//           return true;
//           break;
//         }
//       }
//     }
//     return false;
//   }

//   const array1 = ["a", "b", "x"];
//   const array2 = ["d", "g", "x"];
//   const result = commonFinder(array1, array2);
//   console.log(result);
// o(n^2)

function commonFinder(arr1, arr2) {
  let map = {};
  // converting arr1 into object
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  console.log(map);
  // comparing the values of map with arr2
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}

const array1 = ["a", "b", "x"];
const array2 = ["d", "g", "x"];
const result = commonFinder(array1, array2);
console.log(result);
// o(n+m)
