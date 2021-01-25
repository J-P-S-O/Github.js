// deletes a repo
import https from "https"
export default (opts, cb) => {
  if (!cb) cb = (err, data) =>{
    try{
    console.log(JSON.parse(data))
  }catch{
    console.log(data)
  }
    console.log(err)
     if (err ) throw err

  }
  opts.path = opts.path.trim("/")
  if (typeof cb !== "function") throw "Callback must be function"

  if (!opts.auth) throw "Error: authentication required"
  var options = {
    hostname: 'api.github.com',
    port: 443,
    path: '/repos/'+opts.path,
    method: 'DELETE',
    headers: {
         'Content-Type': 'application/json',
         'Authorization': "token "+ opts.auth,
         'User-Agent': "Node.js v14 windows 10 "
       }
  };

  let data = "";
  let error = null;
  var req = https.request(options, (res) => {
    console.log(res.statusCode)
    if (res.statusCode != 204) error = {
      status: res.status,
      code: res.statusCode,
      body: res.body
    }
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


  req.end();

}
