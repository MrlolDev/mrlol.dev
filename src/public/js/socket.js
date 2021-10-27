const socket = io('http://localhost:3404', {
    transports: ["websocket"],
    secure: true,
    }
)
console.log(userID)
socket.emit('user-connected', userID)
socket.on('disconnect',async => {
    window.localStorage.clear()
})