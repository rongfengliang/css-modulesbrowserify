const styles = require("./app.css");
const styles2 = require("./demo.css");
const domify = require('domify');
const html =`<div class="${styles2.appdemo}">
  <div class="${styles2.otherClassName2}">
    ffff
  </div>
</div>`;
const container = document.querySelector("#container");
container.appendChild(domify(html));