const path=require("path")
console.log("path name:",path.basename("C:\\FSDtraining\\node\\path"))
console.log("directory name:",path.dirname("C:\\FSDtraining\\node\\path\\path.js"))
console.log("ext name:",path.extname("C:\\FSDtraining\\node\\path\\path.js"))
console.log("parse name:",path.parse("C:\FSDtraining\node\path\\path.js"))

console.log("resolve name:",path.resolve("C:\FSDtraining\node\path"))
console.log(path.join("C:","FSDtraining","node","path"))

