var Speed = function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1));
};

var Enemy = function(x, y, Sprite) {
  this.sprite = 'images/enemy-bug.png';
  this.x = x;
  this.y = y;
  this.speed = Speed (95, 250);
};

Enemy.prototype.update = function(dt) {
if (this.x < 808) {
  this.x += this.speed*dt;
    } else {
    this.x =0;
  }
};

Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Player = function(x,y,speed) {
  this.sprite = 'images/char-boy.png';
  this.x = x;
  this.y = y;
  this.speed = speed;
};

Player.prototype.update = function(dt) {
  if (this.moveable) {
    this.x = 101 * this.col;
    this.y = 83 * this.row;
  }

  if (this.y < 83 && this.moveable) {
    this.moveable = false;
    return true;
  }
  return false;
};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.reset = function() {
  this.col = getRandomInt(0, 4);
  this.row = 5;
  this.moveable = true;
};

Player.prototype.handleInput = function(key) {
  switch (key) {
    case 'left':
      this.col--;
      break;
    case 'up':
      this.row--;
      break;
    case 'right':
      this.col++;
      break;
    case 'down':
      this.row++;
      break;
  }
  if (this.col < 0) this.col = 0;
  if (this.col > 4) this.col = 4;
  if (this.row < 0) this.row = 0;
  if (this.row > 5) this.row = 5;
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


var allEnemies = [];
for (var i = 0; i < 3; i++) {
  allEnemies.push(new Enemy());
}

var player = new Player();

document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };
  player.handleInput(allowedKeys[e.keyCode]);
});
