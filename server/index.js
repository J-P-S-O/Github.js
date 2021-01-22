// This file is the server for the webhooks
import { EventEmitter } from "events"
import bodyParser from "body-parser"
import express from "express"
export class GithubjsServer {
  constructor(path){
    this.connector = new EventEmitter()
    this.payloadPath = path
    this.app = express()
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.raw());
    this.app.post(this.payloadPath,

    )
  }
  listen (port, cb){
    let defaultcb = () => {
      console.error("Succesfully loaded GithubjsServer")
      console.error("Check if the port forwarder is ok")
      console.error("And that webhooks are on")
      console.error("That's all! :)")
    }
    this.app.listen(port, cb || defaultcb)
  }

}
