// sorting is a porcess of re-arranging items in a colletion so that the items are in some order.ex assesding or descending order ,sorting alphabetically,sorting movies based on year
// js script accepts a compartion operator  we can use this function to arrange items in a sorted manner comparator looks pair of element (a,b) determines the sort order based on return value
//if it returns a negative number a should come before b,if it returns a positive number a should come after b,if it returns 0 a and b are same as for sorting.

//  function sortarr(num1,num2){
//     return num2- num1
//  }

//  const compare=[4,8,2,7,10,6].sort(sortarr)
//  console.log(compare)

// function string(str1, str2) {
//   return str2.length - str1.length;
// }

// const sortstr = ["bubble", "appple", "duck", "pineapple"].sort(string);
// console.log(sortstr);

// a sorting algorithm  where the largest value bubble up to the top is called bubble sort
//how to do = start looping from the variable called i in the end of the array towards the beginning.,start a inner loop with a variable called j from the beginning until i-1, if arr[j]>arr[j+1] swap those values in the end return those sorted array.

// function bubblesort(arr){

//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length;j++){
//             if(arr[j]>arr[j+1]){
// let temp= arr[j]
// arr[j]= arr[j+1]
// arr[j+1]= temp
//             }
//         }
//     }
//      return arr
// }

// function bubblesort(arr){

//     for(let i=arr.length;i>0;i--){
//         for(let j=0;j<i-1;j++){
//             if(arr[j]>arr[j+1]){
// let temp= arr[j]
// arr[j]= arr[j+1]
// arr[j+1]= temp
//             }
//         }
//     }
//      return arr
// }

// bubblesort[34,28,18,5]

// or
//es 2015 version
// function bubblesort(arr){
//     const swap= (arr,idx1,idx2)=>{
//         [arr[idx1],arr[idx2]]= [arr[idx2],arr[idx2]]
//     };
//     for(let i= arr.length;i>0; i--){
// for(let j=0; j<i-1;j++){
//     if(arr[j]>arr[j+1]){
//        swap(arr,j,j+1)
//     }
// }
//     }
//     return arr
// }

//oprimized with swap

function Bubblesort(arr) {
  let noswap;
  for (let i = arr.length; i > 0; i--) {
    noswap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noswap = true;
      }
    }
    if (noswap) break;
  }
  return arr;
}
