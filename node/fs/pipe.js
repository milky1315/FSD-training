const fs=require("fs")
let rs=fs.createReadStream("demo.txt")
let ws=fs.createWriteStream("mog.txt")
rs.pipe(ws)