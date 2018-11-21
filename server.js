// @flow

const express = require("express")
const path = require("path")
const http = require("http")
const { initSocket } = require("./lib/Socket")

const app = express()
const server = http.createServer(app)
const PORT = process.env.PORT || 8000

initSocket(server)

const buildDir = path.join(__dirname, "build")
app.use(express.static(buildDir))

app.get("/*", (req, res) => {
  res.sendFile(path.join(buildDir, "index.html"))
})

server.listen(PORT, () => console.log(`Listening on port ${PORT}!`))
