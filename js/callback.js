// SYNCHRONOUS CALLBACK
// function display(callback){
//     console.log("hello function");
//     callback();
    
// }
// function hello(){
//     console.log("hello");
// }
// display(hello);


// function add(a,b){
//     return a+b;
// }
// console.log(add(3,4));


// let add=(a,b)=>{
//     return a+b;
// }
// console.log(add(2,3));

// let square=num=>num*num;
// console.log(square(3,4));

// setTimeout(function(){
//     console.log("hello");
// },2000)

// setTimeout(()=>{
//     console.log("hello");
// },2000)

// ASYNCHRONOUS CALLBACK
// function display(){
//     console.log("hello");
//     setTimeout(()=>{
//  console.log("hello cvr");
//     },4000)
   
// }
//  display();
//  display((data)=>{
//     console.log(data);
//  })


// CALLBACK HELL
// function PlaceOrder(callback){
//     setTimeout(()=>{
//     console.log("place order");
//     callback();
// },2000)

// }
// function AcceptOrder(callback){
//      setTimeout(()=>{
//     console.log("accept order");
//      callback();
// },3000)

// }
// function WatchTv(callback){
//     setTimeout(()=>{
//     console.log("watch tv");
//     callback();
// },4000)
 
// }
// function prepareFood(callback){
//     setTimeout(()=>{
//     console.log("prepare Food");
//      callback();
// },5000)

// }
// function payCash(callback){
//     setTimeout(()=>{
//     console.log("pay cash");
//      callback();
// },6000)
// }
//     PlaceOrder(()=>{
//         AcceptOrder(()=>{
//             WatchTv(()=>{
//                 prepareFood(()=>{
//                    payCash(()=>{
//                     console.log("stay healthy");
//                     })
//                 })
//             })
//         })
//     })

//PROMISES
// A Promise is an object that represents the result of an asynchronous 
// operation that may complete in the future.

// const promise = new Promise((resolve, reject) => {
//     let success = true;

//     if (success) {
//         resolve("Task completed");
//     } else {
//         reject("Task failed");
//     }
// });
// promise
//     .then(result => console.log(result))
//     .catch(error => console.log(error));






