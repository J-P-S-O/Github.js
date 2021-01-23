import { EventEmitter } from "events"
export class App{

}
App.prototype.constructor = () =>{
    this.connector = new EventEmitter()
        
}