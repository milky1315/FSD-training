// const EventEmitter=require("events")
// const event=new EventEmitter()
// event.on("greet",()=>{
//     console.log("hello event")
// })
// event.emit("greet")

const EventEmitter=require("events")
const event=new EventEmitter()
event.on("greet",(name)=>{
    console.log("hello",name)
})
event.emit("greet","milky")
