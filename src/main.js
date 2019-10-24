const game = new Game();
const player = new Player();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  clear();
  game.drawGrid();
  player.drawPlayer();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW && player.col > 0) {
    player.moveLeft();
  } else if (keyCode === RIGHT_ARROW && player.col < WIDTH - SIDE) {
    player.moveRight();
  } else if (keyCode === UP_ARROW && player.row > 0) {
    player.moveUp();
  } else if (keyCode === DOWN_ARROW && player.row < HEIGHT - SIDE) {
    player.moveDown();
  }
}