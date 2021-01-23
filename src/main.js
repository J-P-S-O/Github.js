import { EventEmitter } from "events"
export class App{

}
App.prototype.constructor = () =>{
    this.connector = new EventEmitter()
    this.process = process
        
}
const process = () =>{

}