import gh from "./../index.js"
import newrep from "./../src/cmds/repos/new.js"
import fs from "fs"
let ghtoken = fs.readFileSync("E:\\jp\\secret.key")
newrep({
  name: "test",
  auth: ghtoken

}, (err, data) =>{
  console.log(err)
   if (err ) throw err
   console.log(data)

})
let main = async function(){


let app = gh(process.env.ghtoken)



}
main()
