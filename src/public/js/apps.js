const localStorage = window.localStorage
var selectedApp = null

function openApp (app) {
  renderApp(app)
  var navapp = document.getElementById(`nav-${app}`)
  navapp.attributes.open.value = "true"
  localStorage.setItem(`${app}`, 'open')
}
function maximizeApp (appID, icon) {
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
}
function closeApp (app) {
  var appDom = document.getElementById(`app-${app}`)
  appDom.attributes.open.value = 'false';
  var navapp = document.getElementById(`nav-${app}`)
  navapp.attributes.open.value = "false"
  localStorage.removeItem(`${app}`)
}
function renderApp (app) {
  var appDom = document.getElementById(`app-${app}`)
  appDom.attributes.open.value='true'
}
function selectApp(app) {
    if(app.attributes.selected.value == 'true') {
      app.attributes.selected.value = 'false';
      selectedApp = null;
      openApp(app.id)
    } else {
      app.attributes.selected.value = 'true';
      selectedApp = app;
    }
}
function unSelectApp(app) {
  app.attributes.selected.value = 'false';
}
document.addEventListener('click', function(event) {
  if(selectedApp == null) return
  var isClickInsideElement = selectedApp.contains(event.target);
  if (!isClickInsideElement) {
    selectedApp.attributes.selected.value = 'false';
  }
});

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
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

