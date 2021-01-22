import  { GithubjsServer } from "./../server/index"
let server = new GithubjsServer("payload")
server.listen(0)
console.error(server.app.port)
