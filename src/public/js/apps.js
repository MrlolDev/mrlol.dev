const localStorage = window.localStorage;

function openApp(app) {
    localStorage.setItem(`${app}`, 'open');
}
function closeApp(app) {
    localStorage.removeItem(`${app}`);
}