// // Exercise 1
// let  address = {
//   street: 'lekki',
//   city: 'lagos',
//   zipCode : 2242
// }

// function showAddress (address){
//   for (let key in address)
//   console.log(key,address[key])
// }
// showAddress(address);

// Exercise 2
//factory functions
// function createShowAddress (){
//   return{
//     street: 'lekki',
//     city: 'lagos',
//     zipCode : 2242
//   }
// }
// const address =  createShowAddress()
// console.log(address)
// constructor functions 

// function ShowAddress(address){
//   this.street = 'lekki'
//   this.city = 'lagos'
//   this.zipCode = 2242
// } 
//   const address = new ShowAddress()
//      console.log(address)

// Exercise 3
// create 2 address object-(using constructor func)
//create 2 function areEqual and areSame
//let areEqual pass the 2 objects  to check if their properties are equal return true, else false
//let areSame  check if both objects have the same location in memory

// function CreateAddress(address){
//     this.address = address;
//     return this.address
//   } 
//   const newAddress= new CreateAddress (address)

//   const address1 = new CreateAddress(address)
//   const address2 = new CreateAddress(address)

// function areEqual (a,b){
//   for (let key in address)
//   if (a===b) console.log(true); else console.log(false);
// }
// areEqual (address1, address2)

// function areSame(a,b){
// if (a=== address && b=== address2) console.log(true); else console.log(false)
// }
// areSame(address1,address2)
// Exercise 4
// let blogPost = {
//   title: 'Woman',
//   body:'A woman is strong by all means',
//   author:'mikun',
//   views:500,
//   isLive: true
// }
// console.log(blogPost);

// // Exercise 5
let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:"http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
}
  result = []
  function updates (){
    for (let prop in programming){
      if(prop === "languages"){
        programming[prop].push('Go')
      }
      if(prop === "difficulty"){
        programming[prop]= programming[prop] - 1
      }
      delete programming.jokes
      programming.isFun = true
    }
  }
updates();
  console.log (programming)
  console.log (programming.difficulty)
  console.log(programming.jokes)
  console.log (programming)
  console.log (programming.languages)
  console.log(Object.keys(programming))
  console.log(Object.values(programming))


