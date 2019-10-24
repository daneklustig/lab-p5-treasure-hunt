let imgPlayer;
// let imgTreasure;

let imgTreasure

function preload() {
    imgPlayerDown = loadImage("../assets/character-down.png")
    imgPlayerUp = loadImage("../assets/character-up.png")
    imgPlayerLeft = loadImage("../assets/character-left.png")
    imgPlayerRight = loadImage("../assets/character-right.png")
    // imgTreasure = loadImage("../assets/treasure.png")
}

class Player {
    constructor(col, row) {
        this.col = 0; // column is x
        this.row = 0; // row is y
        // this.img = im
    }

    moveUp() {
        this.row -= SIDE;
    }

    moveDown() {
        this.row += SIDE;

    }

    moveLeft() {
        this.col -= SIDE;
    }

    moveRight() {
        this.col += SIDE;
    }

    drawPlayer() {
        image(imgPlayerDown, this.col + 15, this.row + 15, SIDE * 0.7, SIDE * 0.7)
    }
}