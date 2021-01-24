import { EventEmitter } from "events"
import  Octon from "@octokit/rest"
let { Octokit } = Octon
export class App{

}
App.prototype.constructor = (opts) =>{
    if (typeof opts === "string") opts = {auth: opts}
    if (!opts) throw "Too few args"
    if (!opts.auth) throw "No auth token provided for Octokit"
    this.connector = new EventEmitter()
    this.run = run
    this.octo = new Octokit(opts)

}
const run = (json) =>{

}
