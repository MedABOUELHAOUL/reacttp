var http = require ('http')
var url = require('url')
var httpServer = http.createServer ( ( req , res ) =>{
    res.writeHead ( 200 , {'content-type' : 'text/html'})
    res.end ( '<h2> </h2>')
    console.log (url.parse(req.url).path)
})

httpServer.listen ( 5050 , ()=>{
    console.log ("server is running")
})