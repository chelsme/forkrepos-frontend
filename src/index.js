const projectiles = [];
const chelsea = new Character(projectiles);
//const evil = new Enemy();

function loop(timestamp) {
  var progress = timestamp - lastRender;

  document.getElementById("game-view").innerHTML = chelsea.render();
  // document.getElementById("game-view").innerHTML += evil.render();
  // evil.attack(chelsea.pos.x);

  for (element of projectiles) {
    if (element.deleteable())
      projectiles.splice(projectiles.indexOf(element), 1);
    else document.getElementById("game-view").innerHTML += element.render();
  }

  lastRender = timestamp;
  window.requestAnimationFrame(loop);
}
var lastRender = 0;
window.requestAnimationFrame(loop);
