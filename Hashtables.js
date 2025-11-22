// used to store key , value pairs, they are like arrays but  the keys are not ordered. unlike arrays. 
// hash tables are fast for finding values, adding values, removing values
//ex in javascript maps and objects 
// we need to convert key to valid indices  function that perforns this is called function.
// hash tables needs to be fast, determistic, disrtibute output uniformly 
// separate chaining is used to store the multiple key values pair on the same index 
//linear probing  when we find collision we search through through the array to find the next empty spot. this helps to store single key value pair  at each index.
// set and get propery  set accepts keys and stores value, hashes key, stores array via separate chaining., get accepts keys, hashes keys , retrives the key value pair if not found then replies as a undefined 

// function hash(key, arrayLen){
//     let total= 0;
//     for(let char of key){
// let value= char.charCodeAt(0)-96
// total= (total+ value)%arrayLen
//     }
//     return total

// }

// hash("hi",10)
// console.log(hash("pink", 10)); 

// function hashh(key,arraylen){
//     let sum= 0;
//     let primenumber= 31
//   for(let i=0; i<Math.min())
// }

class Hashtable{
    constructor(size=20){
        this.keyMap= new Array(size)
    }
  _hash(key){
    let total= 0;
    let Prime= 31
    for(let i=0; i< Math.min(key.length) ; i++){
        let char= key[i]
        let value= char.charCodeAt(0)-96
        total= (total*Prime + value)% this.keyMap.length
    } return total
  }

    Set(key,value){
        let index= this._hash(key)
        if(!this.keyMap){
            this.keyMap[index]= []
        } this.keyMap.push([key,value])
       
    } 

     get(key){
let index= this._hash(key)
if(this.keyMap[index]){
    for(let i=0;i<this.keyMap[index];i++){
        if(this.keyMap[index][i][0]===key){
            return this.keyMap[index][i][1]
        }
    }
return this.keyMap[index]
}  return undefined
        }
    
}

let ht= new Hashtable();
ht.Set("Hello world", "good byee")

ht.get("Hello world")
console.log(ht.get("Hello world","good byee"))

// keys or values 
// loopsthe hash table array and returns an array of values in a table