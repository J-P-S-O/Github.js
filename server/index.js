// This file is the server for the webhooks
import { EventEmitter } from "events"
import bodyParser from "body-parser"
import express from "express"
export class GithubjsServer {
  constructor(path){
    if (!path.startsWith("/")) path = "/" + path
    this.connector = new EventEmitter()
    this.payloadPath = path
    this.app = express()
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.raw());
    this.debug = {}

    this.app.post(this.payloadPath,function(req, res){
      app.connector.emit("Got Body", req.body)
      res.write(200)
    }
    )
  }
  listen (port){

     var p = this.app.listen(port, function() {
       console.error("Succesfully loaded GithubjsServer")
       console.error("Check if the port forwarder is ok")
       console.error("And that webhooks are on")
       console.error("That's all! :)")
       this.debug.port = p.address().port
     })
  }

}
