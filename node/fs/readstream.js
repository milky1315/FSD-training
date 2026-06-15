
const fs=require("node:fs")
let rs=fs.createReadStream("te.txt")
rs.on("data",(chunk)=>{
     console.log(chunk)
})
rs.on("error",()=>{
    console.log("error")
})