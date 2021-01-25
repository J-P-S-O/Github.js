import {spawn } from "child_process"
export let help = `
Create a new repo

`
export default (opts)=>{

const https = require('https');

var postData = JSON.stringify({
    
});

var options = {
  hostname: 'posttestserver.com',
  port: 443,
  path: '/post.php',
  method: 'POST',
  headers: {
       'Content-Type': 'application/json',
       'Content-Length': postData.length,
       'Authentication': "token "+ opts.token
     }
};

var req = https.request(options, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (e) => {
  console.error(e);
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