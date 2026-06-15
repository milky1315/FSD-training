const fs=require("fs")
let data="this is async append"
fs.appendFileSync("demo.txt",data,(err)=>{
    if(err){
        console.log(err)
    }
    console.log(data)
})