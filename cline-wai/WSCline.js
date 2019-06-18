
/* 客户端连接服务器文件
   聊天室  输出的内容格式
 */

/* 创建通讯网址 */
const ws=new WebSocket('ws://10.31.161.21:8000');
/* open() */
ws.onopen=()=>{ ws.send('欢迎来到 智慧满满 的直播间！') }
/* onmessage() */
ws.onmessage=(msg)=>{
    const content=document.querySelector('#content');
          content.innerHtml += msg.data+'<br/>'
}
/* error */
ws.onerror=(error)=>{
        if(eroor){console.log(error)}
}
/* onclose */
ws.onclose=()=>{
    console.log('智慧满满 关闭了聊天室')
}