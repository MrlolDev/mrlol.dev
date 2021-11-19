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
async function WS_SendAppCheck() {
  socket.emit('get-apps', userID)
}

setInterval(async () => { await WS_SendAppCheck() }, 5000)

socket.on('receive-apps', async(apps) => {
  for(var i = 0; i < apps.length; i++) {
    await checkAppStatus(apps[i].id, apps[i])
  }
})

async function checkAppStatus(appID, appOldObj) {
  var appObj = await getAppObj(appID);
  if(appObj == null) return; 
  if(appObj.restore != appOldObj.restore || appOldObj.x != appObj.x || appOldObj.y != appObj.y) {
    await WS_App(appID)
  }
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