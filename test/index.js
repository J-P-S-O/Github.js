import gh from "./../index.js"
import newrep from "./../src/cmds/repos/new.js"
import delrep from "./../src/cmds/repos/delete.js"
import fs from "fs"
let ghtoken = fs.readFileSync("E:\\jp\\secret.key")
newrep({
  name: "test2",
  auth: ghtoken

})
setTimeout(delrep({
  path: "J-P-S-O/test2",
  auth:ghtoken
}), 5000)

let main = async function(){


let app = gh(fs.readFileSync("E:\\jp\\secret.key"))



}
main()
