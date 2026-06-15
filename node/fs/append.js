const fs=require("fs")
let data="data is appended"
fs.appendFileSync("demo.txt",data)