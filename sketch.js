 /*
    This is a simple chess game made with P5.js
    Copyright (C) 2017 Scott Winkelmann

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

//constantes
const cols = 8;
const rows = 8;
const size = 40;
const textHeight = (rows+1)*size;
const textPad = size;

const boardBlack = "#d18b47";
const boardWhite = "#ffce9e";

const pieceBlack = "#111";
const pieceWhite = "#eee";

//global variables
let board;
let clicked;
let turn;

let brookImg;
let bknightImg;
let bbishopImg;
let bqueenImg;
let bkingImg;
let bpawnImg;

let wrookImg;
let wknightImg;
let wbishopImg;
let wqueenImg;
let wkingImg;
let wpawnImg;

function preload()
{
    //textures
    brookImg =   loadImage("img/brook.png");
    bknightImg = loadImage("img/bknight.png");
    bbishopImg = loadImage("img/bbishop.png");
    bqueenImg =  loadImage("img/bqueen.png");
    bkingImg =   loadImage("img/bking.png");
    bpawnImg =   loadImage("img/bpawn.png");

    wrookImg =   loadImage("img/wrook.png");
    wknightImg = loadImage("img/wknight.png");
    wbishopImg = loadImage("img/wbishop.png");
    wqueenImg =  loadImage("img/wqueen.png");
    wkingImg =   loadImage("img/wking.png");
    wpawnImg =   loadImage("img/wpawn.png");
}

function setup()
{
    createCanvas(innerWidth,innerHeight);
    background(255);
    frameRate(60);

    blackPieces = new Array();
    whitePieces = new Array();

    board = new Board(blackPieces,whitePieces);


    //black pieces
    let brook1 =   new Rook  (board.cells[0][0],0,brookImg);
    let bknight1 = new Knight(board.cells[1][0],0,bknightImg);
    let bbishop1 = new Bishop(board.cells[2][0],0,bbishopImg);
    let bqueen =   new Queen (board.cells[3][0],0,bqueenImg);
    let bking =    new King  (board.cells[4][0],0,bkingImg);
    let bbishop2 = new Bishop(board.cells[5][0],0,bbishopImg);
    let bknight2 = new Knight(board.cells[6][0],0,bknightImg);
    let brook2 =   new Rook  (board.cells[7][0],0,brookImg);

    let bpawn1 =   new Pawn  (board.cells[0][1],0,bpawnImg);
    let bpawn2 =   new Pawn  (board.cells[1][1],0,bpawnImg);
    let bpawn3 =   new Pawn  (board.cells[2][1],0,bpawnImg);
    let bpawn4 =   new Pawn  (board.cells[3][1],0,bpawnImg);
    let bpawn5 =   new Pawn  (board.cells[4][1],0,bpawnImg);
    let bpawn6 =   new Pawn  (board.cells[5][1],0,bpawnImg);
    let bpawn7 =   new Pawn  (board.cells[6][1],0,bpawnImg);
    let bpawn8 =   new Pawn  (board.cells[7][1],0,bpawnImg);

    board.blackPieces.push(brook1);
    board.blackPieces.push(bknight1);
    board.blackPieces.push(bbishop1);
    board.blackPieces.push(bqueen);
    board.blackPieces.push(bking);
    board.blackPieces.push(bbishop2);
    board.blackPieces.push(bknight2);
    board.blackPieces.push(brook2);

    board.blackPieces.push(bpawn1);
    board.blackPieces.push(bpawn2);
    board.blackPieces.push(bpawn3);
    board.blackPieces.push(bpawn4);
    board.blackPieces.push(bpawn5);
    board.blackPieces.push(bpawn6);
    board.blackPieces.push(bpawn7);
    board.blackPieces.push(bpawn8);

    //white pieces
    let wrook1 =   new Rook  (board.cells[0][7],1,wrookImg);
    let wknight1 = new Knight(board.cells[1][7],1,wknightImg);
    let wbishop1 = new Bishop(board.cells[2][7],1,wbishopImg);
    let wqueen =   new Queen (board.cells[3][7],1,wqueenImg);
    let wking =    new King  (board.cells[4][7],1,wkingImg);
    let wbishop2 = new Bishop(board.cells[5][7],1,wbishopImg);
    let wknight2 = new Knight(board.cells[6][7],1,wknightImg);
    let wrook2 =   new Rook  (board.cells[7][7],1,wrookImg);

    let wpawn1 =   new Pawn  (board.cells[0][6],1,wpawnImg);
    let wpawn2 =   new Pawn  (board.cells[1][6],1,wpawnImg);
    let wpawn3 =   new Pawn  (board.cells[2][6],1,wpawnImg);
    let wpawn4 =   new Pawn  (board.cells[3][6],1,wpawnImg);
    let wpawn5 =   new Pawn  (board.cells[4][6],1,wpawnImg);
    let wpawn6 =   new Pawn  (board.cells[5][6],1,wpawnImg);
    let wpawn7 =   new Pawn  (board.cells[6][6],1,wpawnImg);
    let wpawn8 =   new Pawn  (board.cells[7][6],1,wpawnImg);

    board.whitePieces.push(wrook1);
    board.whitePieces.push(wknight1);
    board.whitePieces.push(wbishop1);
    board.whitePieces.push(wqueen);
    board.whitePieces.push(wking);
    board.whitePieces.push(wbishop2);
    board.whitePieces.push(wknight2);
    board.whitePieces.push(wrook2);

    board.whitePieces.push(wpawn1);
    board.whitePieces.push(wpawn2);
    board.whitePieces.push(wpawn3);
    board.whitePieces.push(wpawn4);
    board.whitePieces.push(wpawn5);
    board.whitePieces.push(wpawn6);
    board.whitePieces.push(wpawn7);
    board.whitePieces.push(wpawn8);
    
    clicked = false;

    //0 black
    //1 white
    turn = 1;

    //whiteQueen.updateValidCells();
}
//end setup

function draw()
{
    background(255);

    //board.update();
    board.drawCells();
    board.drawPieces();

    //queen.moveTo(board.cells[int(random(63))]);
    

    fill(0);
    textSize(20);

    //informations
    switch(board.checkWinner())
    {
        case 0: text("Black won !",textPad,textHeight); break;
        case 1: text("White won !",textPad,textHeight); break;
        case -1: switch(turn)
        {
            case 0: text("Black turn !",textPad,textHeight); break;
            case 1: text("White turn !",textPad,textHeight); break;
        }; break;
    }
}
//end draw

function mouseReleased()
{
    clicked = false;
}

function mousePressed()
{
    if(board.checkWinner() == -1)
        if(!clicked)
        {
            clicked = true;
            if(!board.selectedPiece)
            {
                board.selectPiece();
            }
            else
            {
                let cell = board.getFocussedCell();
                if(board.isValid(board.selectedPiece,cell))
                {
                    board.selectedPiece.moveTo(cell);
                    board.selectedPiece.updateValidCells();
                    board.unselectPiece();

                    //tour adverse
                    turn == 1 ? turn = 0 : turn = 1;
                }
            }
        }
}

function keyPressed()
{
    //console.log(board.whitePieces);
    //console.log(whiteQueen.validCells);
}

function D2Array(sizeX,sizeY)
{
    let a = new Array(sizeX);
    for(let i = 0; i < a.length; i++)
    {
        a[i] = new Array(sizeY);
    }    
    return a;
}