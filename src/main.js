const styles = require("./app.css");
const domify = require('domify');
const html =`<div class="${styles.appdemo}">this is a demo app</div>`;
const container = document.querySelector("#container");
container.appendChild(domify(html));