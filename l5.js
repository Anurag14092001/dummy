const http = require('http')
const {readFileSync} = require('fs')

const details = readFileSync('./tests/employee.txt','utf8')

const server = http.createServer((req,res)=>{
    if (req.url ==='/'){
        res.end("Welcome to the home page")
    }else if (req.url==='/info'){
        res.end(
            `<h1> Details </h1>
            <p>${details}</p>
            `

            
        )
    }else{

    res.end(`<h1>OOPS</h1>
            <p>Info not found</p>
    `)}
})

server.listen(5000)