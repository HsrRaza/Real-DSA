import http from "node:http"

const  port  = process.env.PORT ?? 9000;

const httpServer = http.createServer(async function(req, res) {})

httpServer.listen(port ,()=>{
    console.log(`server is  running on https://localhost:${port}`);
    
})