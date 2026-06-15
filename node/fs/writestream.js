const fs=require("node:fs")
let ws=fs.createWriteStream("te.txt")
let rs=fs.createReadStream("test.txt","utf-8")
rs.on("data",(chunk)=>{
    ws.write(chunk)
    console.log("data return successfully")
})
rs.on("error",()=>{
console.log("error")
})