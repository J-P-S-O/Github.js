import {spawn } from "child_process"
import https from "https"
export let help = `
Create a new repo

`
export default (opts, cb)=>{
if (!cb) cb = (err, data)  =>{
  if (err) throw err
  return data
}

if (typeof cb !== "function") throw "Callback must be function"
if (!opts.name) throw " Error: name required"
if (!opts.auth) throw "Error: authentication required"
var postData = JSON.stringify({
  name: opts.name,
  auto_init: opts.auto_init,
  private: opts.scope === "private",
  gitignore: opts.gitignore || undefined
});

var options = {
  hostname: 'api.github.com',
  port: 443,
  path: '/user/repos',
  method: 'POST',
  headers: {
       'Content-Type': 'application/json',
       'Content-Length': postData.length,
       'Authentication': "token "+ opts.token
     }
};
let data = "";
let error = null;
var req = https.request(options, (res) => {
  console.log(res.statusCode)
  if (res.statusCode != 200)
  error = { status: res.status, code: res.statusCode, body: res.body}
  res.on('data', (d) => {
    data+=d;
  });
  res.on('end', ()=>{
    cb(error, data)
  })
});

req.on('error', (e) => {
 error = e
 cb(error, data)
});

req.write(postData);
req.end();

}
/*
  "curl -i -H "Authorization: token abc123token"\
    -d '{ \
        "name": "blog", \
        "auto_init": true, \
        "private": true, \
        "gitignore_template": "nanoc" \
      }'
      "


*/
