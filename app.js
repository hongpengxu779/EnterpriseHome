let express = require("express")
let app = express(); // 创建一台服务器

// 处理客户端的请求 /
app.get("/",(req,res)=>{
    // res.send表示响应内容
    res.send("<h1>Hello 客户端~</h1>")
})

app.get("/car",(req,res)=>{
    // res.send表示响应内容
    res.send("<h1>购物车~</h1>")
})
// 监听一个端口
app.listen(3000,()=>{
    console.log("服务器启动了~")
})
