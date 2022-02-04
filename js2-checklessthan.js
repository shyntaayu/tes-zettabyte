// Expected Result = true
// Direction : need to check if each of array value has value less than 91
const array1 = [1, 29, 88, 37, 22, '90'];

function result(array1) {
  // Your Code Here
  let a = array1.map(e=>{return parseInt(e)<91})
  let b = a.every(e=>e===true)
  return b
}

console.log(result(array1));