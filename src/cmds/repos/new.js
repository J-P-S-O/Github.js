import {spawn } from "child_process"
export let help = `
Create a new repo

`
export default (opts)=>{
/*
  "curl -i -H "Authorization: token abc123token"\
    -d '{ \
        "name": "blog", \
        "auto_init": true, \
        "private": true, \
        "gitignore_template": "nanoc" \
      }'
      "

}
*/