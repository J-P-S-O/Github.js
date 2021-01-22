import  { GithubjsServer } from "./../server/index.js"
import axios from "axios"
let server = new GithubjsServer("payload")

server.listen(30022)
var request = require('request');

request.post(
      'http://localhost'+ server.payloadPath,
      { json: { key: 'value' } },
      function (error, response, body) {
          if (!error && response.statusCode == 200) {
              console.log(body);
          }else{
            console.error(res.statusCode)
            throw new Error(error)
          }
      }
  );
