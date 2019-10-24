class Treasure {
    constructor(col, row) {
        this.col = this.setRandomPosition();
        this.row = this.setRandomPosition();
    }

    setRandomPosition() {
        this.col = Math.floor(Math.random() * 10) * SIDE;
        this.row = Math.floor(Math.random() * 10) * SIDE;
    }

    drawTreasure() {
        image(imgTreasure, this.col, this.row, SIDE, SIDE)
    }
}