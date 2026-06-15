const fs=require("fs");
let data="this is nodejs"
fs.writeFile("test.txt",data,(err)=>{
    if(err){
        console.log(err)
    }
    console.log("data returned successfully")
})