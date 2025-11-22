//string are characters 

//reverse a string
function reverse(str){
return str.split("").reverse().join("")
}
const rev= reverse("john")
console.log(rev)
// palindrome

const palindrome =(str)=> {
    
    const rev= str.split("").reverse().join("")
    return rev=== str

}
console.log(palindrome("mom"))

//number reverse 
function revnum(n){
    const revnum= n.toString().split('').reverse().join('')
    return parseInt(revnum) *Math.sign(n)
}
console.log(revnum(6441))

// sentence capitalization
function Capital(str){
return str.toLowerCase().split("").map((Word)=> Word[0].toUpperCase()+ Word.slice(1)).join("")
}
console.log(Capital("hello"))