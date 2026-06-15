const http=require("http")
const fs=require("fs")
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
    res.writeHead(200)
    res.end("hello world")
    }
    else if(req.url==="/home"){
        res.writeHead(200,{"content-type":"text/html"})
        res.end("<h1>this is about page</h1>")
    }
    else if(req.url==="/about"){
        fs.readFile("about.html",(err,data)=>{
        if(err){
            res.writeHead(400)
            res.end("error")
            return
        }
        res.writeHead(200,{"content-type":"text/html"})
       res.end(data)
    })
}
})
server.listen(5000,()=>{
    console.log("server running")
})