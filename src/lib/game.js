

function Game() {
    this.canvas = document.getElementById('canvas');
    this.context = canvas.getContext('2d');
    this.canvas.width = 800;
    this.canvas.height = 600;
    this.context.font = '32px Arial';
    this.context.fillText('soundSpace', 5, 50, 800);
}


window.game = new Game;

module.exports = game;