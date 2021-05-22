// reverse the sentense
A = ['t','h','i','s',' ','i','s',' ','g','o','o','d'] 
//remove the commas

let k = A.join('')// this is good

let m = k.split(" ") // ["this", "is", "good"]
let start = 0;
let end = m.length - 1

const reverseA = (m) => {
  if(start < end){
    let temp = m[start]
    m[start] = m[end]
    m[end] = temp
    start ++
    end --
    return reverseA(m)
  }
  console.log(m)// good is this
  m = m.join(" ")
  console.log(m) //[]
  m = m.split("")
  console.log(m)
}
reverseA(m)
