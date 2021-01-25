import gh from "./../index.js"
import newrep from "./../src/cmds/repos/new.js"
import fs from "fs"
let ghtoken = fs.readFileSync("E:\\jp\\secret.key")
newrep({
  name: "test",
  auth: ghtoken

})
let main = async function(){


let app = gh(fs.readFileSync("E:\\jp\\secret.key"))



}
main()
