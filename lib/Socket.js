// @flow

const socketIO = require("socket.io")

const initSocket = server => {
  const io = socketIO(server)
  let connectedClients = 0

  io.on("connect", socket => {
    connectedClients += 1

    console.log(
      `Connected user: ${socket.id} - Sockets connected: (${connectedClients})`
    )

    socket.on("disconnect", () => {
      connectedClients -= 1

      console.log(
        `User ${
          socket.id
        } disconnected  - Sockets connected: (${connectedClients})`
      )
    })
  })
}

module.exports = {
  initSocket
}
