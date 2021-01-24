import {spawn } from "child_process"
export default (opts)=>{
  let sample = "curl -i -H \"Authorization: token {}\"\
    -d \'{ \
        \"name\": \"blog\", \
        \"auto_init\": true, \
        \"private\": true, \
        \"gitignore_template\": \"nanoc\" \
      }\'
      "
    
}
