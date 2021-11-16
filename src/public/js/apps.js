const localStorage = window.localStorage
var selectedApp = null

async function LoadSession() {
  console.log(session)
  for(let app of session.openApps) {
    var appDom = document.getElementById(`${app.domID}`)
    if(!appDom) return
    appDom.attributes.open.value = app.open
    if(app.open == 'true') {
      var navapp = document.getElementById(`nav-${app.id}`)
      navapp.attributes.open.value = "true"
    }
    appDom.style.top = app.y
    appDom.style.left = app.x
    appDom.attributes.restore.value = app.restore
  }
}
async function openApp (app) {
  renderApp(app)
  var navapp = document.getElementById(`nav-${app}`)
  navapp.attributes.open.value = "true"
  await WS_App(app)
}
async function maximizeApp (appID, icon) {
  var app = document.getElementById(`app-${appID}`)
  var min = app.attributes.restore.value
  if(min == 'true') {
    icon.className = "far fa-window-restore"
    app.attributes.restore.value = "false"
    app.style = ""
  } else {
    icon.className = "far fa-window-maximize"
    app.attributes.restore.value = "true"
  }
  await WS_App(appID)
}
async function closeApp (app) {
  var appDom = document.getElementById(`app-${app}`)
  appDom.attributes.open.value = 'false';
  var navapp = document.getElementById(`nav-${app}`)
  navapp.attributes.open.value = "false"
  await WS_App(app)
}
function renderApp (app) {
  var appDom = document.getElementById(`app-${app}`)
  appDom.attributes.open.value='true'
}
async function selectApp(app) {
    if(app.attributes.selected.value == 'true') {
      app.attributes.selected.value = 'false';
      selectedApp = null;
      await openApp(app.id)
    } else {
      app.attributes.selected.value = 'true';
      selectedApp = app;
    }
}
function unSelectApp(app) {
  app.attributes.selected.value = 'false';
}
document.addEventListener('click', function(event) {
  if(selectedApp !== null) {
    var isClickInsideElement = selectedApp.contains(event.target);
    if (!isClickInsideElement) {
      selectedApp.attributes.selected.value = 'false';
    }
  }
});

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } 
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.addEventListener("mouseup", async() => {
      console.log(`stop moving ${elmnt.id.replace('app-', '')}`)
      await WS_App(elmnt.id.replace('app-', ''))
    })
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  async function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

