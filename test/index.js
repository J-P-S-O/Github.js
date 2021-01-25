import gh from "./../index.js"
import newrep from "./../src/cmds/repos/new.js"
newrep({
  name: "test",
  auth: process.env.ghtoken
})
let main = async function(){


let app = gh(process.env.ghtoken)



}
main()
