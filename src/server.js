const express = require("express")
const server = express()

//config paste public
server.use(express.static("public"))


//using template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})


//Config
//page home
server.get("/", (req, res) => {
    return res.render("index.html", { title: "Um Titulo"})
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.get("/search", (req, res) => {
    return res.render("search-results.html")
})

//ON server
server.listen(3000)
