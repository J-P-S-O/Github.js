import  { GithubjsServer } from "./../server/index.js"
import axios from "axios"
let server = new GithubjsServer("payload")

server.listen(30022)
import request from "request"

request.post(
      'http://localhost:30022'+ server.payloadPath,
      { json: { key: 'value' } },
      function (error, response, body) {
          if (!error) {
              console.log(body);
          }else{

            throw new Error(error)
          }
      }
  );
// fix here
