/* 
  这是web静态服务器，
  是为了展示客户端界面（不在），而特意创建的！
*/
const express=require('express');
const app=express();
const port=3000;            /* 模拟客户端 */
const hostname='10.31.161.21';
const path=require('path');


app.use( express.static( path.join( __dirname,'cline-wai' )) )
app.listen(port,hostname,()=>{
    console.log(`正在运行的是:http://${hostname}:${port}`)
})