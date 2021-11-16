const socket = io('http://localhost:3404', {
  transports: ['websocket'],
  secure: true
})

socket.emit('user-connected', userID)

async function WS_App(appID) {
  var appObj = await getAppObj(appID);
  if(appObj == null) return; 
  socket.emit('app-status', userID, appObj)
}

async function getAppObj(appID) {
  var appDom = document.getElementById(`app-${appID}`)
  if(!appDom) return null
  var appObj = {
    id: appID,
    domID: appDom.id,
    x: appDom.style.left,
    y: appDom.style.top,
    restore: appDom.attributes.restore.value,
    open: appDom.attributes.open.value,
  }
  return appObj;
}