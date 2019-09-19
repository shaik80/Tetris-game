const playground = document.getElementById("game-area");
const ctx = playground.getContext("2d")
const scoreElement = document.getElementById("score");

const ROW = 20;
const COL = COLUMN = 10;
const SQ = squareSize = 30;
let grd = ctx.createLinearGradient(500,0,700,700);
          grd.addColorStop(0,"#8bcbf1");
          grd.addColorStop(1,"white");
const VACANT = grd; // color of an empty square