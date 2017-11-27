var Enemy = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = Math.floor(Math.random()*100)+100;
    this.sprite = 'images/enemy-bug.png';
};

Enemy.prototype.update = function(dt) {
    this.x += this.speed * dt;
    if (this.x >= 650) {
        this.reset();
      }
};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.reset = function () {
    this.x = -101;
    this.y = 58;
    this.row = Math.floor((Math.random() * 3) + 1);
    this.speed = Math.floor((Math.random() * 4) + 3);
};

var Player = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function() {
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keyPress) {
    if (keyPress == 'left') {
        player.x -= player.speed;
    }
    if (keyPress == 'up') {
        player.y -= player.speed;
    }
    if (keyPress == 'right') {
        player.x += player.speed;
    }
    if (keyPress == 'down') {
        player.y += player.speed;
    }
    console.log('keyPress is: ' + keyPress);
};

var allEnemies = [];

for (var i = 0; i <= 3; i++) {
    pushEnemy = new Enemy();
    allEnemies.push(pushEnemy);
  };

var player = new Player(200,380,20);

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
  });
