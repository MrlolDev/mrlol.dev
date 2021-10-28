const localStorage = window.localStorage;

function openApp(app) {
    renderApp(app);
    localStorage.setItem(`${app}`, 'open');
}
function closeApp(app) {
    localStorage.removeItem(`${app}`);
}
function renderApp(app) {
    document.write(`<%- include(/apps/${app})%>`)
}