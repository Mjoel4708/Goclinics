const A = [10, 5, 6, 9]
let start = 0
let end = A.length - 1
const reverseA = (A) =>{
  if(start < end){
    temp = A[start]
    A[start] = A[end]
    A[end] = temp
    end--
    start++
    return reverseA(A)
  }
console.log(A)
}
reverseA(A)
