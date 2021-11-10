const localStorage = window.localStorage
var selectedApp = null

function openApp (app) {
  renderApp(app)
  localStorage.setItem(`${app}`, 'open')
}
function closeApp (app) {
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