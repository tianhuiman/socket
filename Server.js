/* 

 ！主服务器！！！！！

    1. 通过ws模块来创建服务器
    2. 服务器连接客户端
      - 给客户端编号
    3. 接收客户端发来的信息
    4. 监听客户端下线
*/
         /*  ws模块  */
const webSocket=require('ws');

      /* 创建通信服务端 */
const ws=new webSocket.Server({
    port:8000,
    host:'10.31.161.21'
})    /* 主服务器的ip地址*/


/* 设置 */
const clinets={};
const num=0;
/* lianjie */
ws.on('connection',clinet=>{         /* {key,value} */
    clinet.name=++num;               /*   此：定义key*/
    clinets[clinet.name]=clinet;     /*   此：定义value */

    /* 子事件  接收客户端信息*/
    clinet.on('message',msg=>{
        console.log(`客户端${clinet.name}说${msg}`);
        boardcast(clinet,msg)
    })
    /* 子事件   监听客户端下线 */
    clinet.on('close',()=>{
        delete clinets[client.name] /* shan ci bian hao 编号* */
        console.log(`客户端${clinet.name}closed~~`)
    })
})
/* 广播函数  把接收的多个顾客信息广播出去*/
function boardcast(clinet,msg){
    for(var key in cllinets){       /* 输出{ key的value值 } */
        clinets[key].send(msg)
    }
}