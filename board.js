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

class Board
{
    /**
     * Create a chess board
     * @param {Array} blackPieces
     * @param {Array} whitePieces
     */
    constructor(blackPieces,whitePieces)
    {
        this.cells = D2Array(cols,rows);
        this.blackPieces = blackPieces;
        this.whitePieces = whitePieces;

        //couleur de départ
        let color = boardWhite;

        for(let y = 0; y < cols; y++)
        {
            let yName = rows-y;
            if(color == boardWhite)
                    color = boardBlack;
                else
                    color = boardWhite;

            for(let x = 0; x < rows; x++)
            {
                let xName = String.fromCharCode(x+65); //65 is A in ASCII

                //inverting color
                if(color == boardWhite)
                    color = boardBlack;
                else
                    color = boardWhite;

                //filling the array with cells
                this.cells[x][y] = new Cell(xName.concat(yName),x,y,size,color);
            }
        }
        this.selectedPiece = null;
    }

    getKings()
    {
        //getting the kings
        this.whitePieces.forEach(function(piece) {
            if(piece instanceof King)
                this.whiteKing = piece;
        }, this);

        this.blackPieces.forEach(function(piece) {
            if(piece instanceof King)
                this.blackKing = piece;
        }, this);
    }


    /**
     * Draws every cell on the screen
     */
    drawCells()
    {
        this.cells.forEach(function(a) {
            a.forEach(function(cell) {
                cell.draw();
            }, this);
        }, this);
    }

    /**
     * Draws every piece on the screen
     */
    drawPieces()
    {
        this.whitePieces.forEach(function(piece) {
            piece.draw();
        }, this);

        this.blackPieces.forEach(function(piece) {
            piece.draw();
        }, this);
    }

    /**
     * Returns which cell is currently in focus, or undefinied if none are
     */
    getFocussedCell()
    {
        return this.cells[localMouseX()][localMouseY()];
    }

    /**
     * Cheks if the fiven cell is valid for the given pice to move into
     * @param {Piece} piece 
     * @param {Cell} cell 
     */
    isValid(piece,cell)
    {
        let valid = false;

        //if the cell is defined
        if(cell)
        {
            //if the cell is in the valid set
            piece.validCells.forEach(function(validCell) {
                if(validCell == cell)
                    valid = true;
            }, this);
        }

        return valid;
    }

    /**
     * remove a piece from a cell if there is one
     * @param {Cell} cell 
     */
    takeOver(cell)
    {
        //for every piece in the black array
        for(let i = 0; i < this.blackPieces.length; i++)
        {
            //if the piece is in the cell we are taking over
            if(this.blackPieces[i].cell == cell)
            {
                //we eat the piece
                this.blackPieces.splice(i,1);
            }
        }

        //for every piece in the white array
        for(let i = 0; i < this.whitePieces.length; i++)
        {
            //if the piece is in the cell we are taking over
            if(this.whitePieces[i].cell == cell)
            {
                //we eat the piece
                this.whitePieces.splice(i,1);
            }
        }
    }

    colorCells(cells)
    {
        for(let x = 0; x < board.cells.length; x++)
        {
            for(let y = 0; y < board.cells[0].length; y++)
            {
                board.cells[x][y].highlight = cells.indexOf(board.cells[x][y]) != -1;
            }
        }
    }

    selectPiece()
    {
        this.selectedPiece = null
        let cell = this.getFocussedCell();
        //if cell is valid
        if(cell)
        {
            //what piece is on the cell
            if(turn == 1)
                this.whitePieces.forEach(function(piece) {
                    if(piece.cell == cell)
                        this.selectedPiece = piece;
                }, this);
            else if(turn == 0)
                this.blackPieces.forEach(function(piece) {
                    if(piece.cell == cell)
                        this.selectedPiece = piece;
                }, this);

            if(this.selectedPiece)
            {
                this.selectedPiece.updateValidCells();
                 if(this.selectedPiece.validCells.length == 0)
                    this.selectedPiece = null;
            }

        }
    }

    unselectPiece()
    {
        this.selectedPiece.validCells = new Array();
        this.colorCells(this.selectedPiece.validCells);
        this.selectedPiece = null;
    }

    checkCheck()
    {
        //check check for black king
        let blackCheck = false;
        this.whitePieces.forEach(function(piece) {
            piece.getValidCells().forEach(function(cell) {
                if(cell == this.blackKing.cell)
                    blackCheck = true;
            }, this);
        }, this);
        this.blackKing.check = blackCheck;

        //check check for white king
        let whiteCheck = false;
        this.blackPieces.forEach(function(piece) {
            piece.getValidCells().forEach(function(cell) {
                if(cell == this.whiteKing.cell)
                    whiteCheck = true;
            }, this);
        }, this);
        this.whiteKing.check = whiteCheck;
    }

    checkCheckMate()
    {
        if(this.blackKing.check)
        {
            //check check for white king
            let blackCheckMate = true;
            
            //foreach valid cells of the king
            this.blackKing.getValidCells().forEach(function(kingCell) {
                let validCell = false;
                //foreach ennemy pieces
                this.whitePieces.forEach(function(piece) {
                    //foreach valid cells of ennemy pieces
                    piece.getValidCells().forEach(function(pieceCell) {
                        //if the cell isn't found in any of the ennemy valid cells, it stays false
                        if(pieceCell == kingCell)
                            validCell = true;
                    }, this);
                    blackCheckMate = validCell;
                }, this);
            }, this);

            this.blackKing.checkMate = blackCheckMate;
        }

       if(this.whiteKing.check)
        {
            //check check for white king
            let whiteCheckMate = true;
            
            //foreach valid cells of the king
            this.whiteKing.getValidCells().forEach(function(kingCell) {
                let validCell = false;
                //foreach ennemy pieces
                this.blackPieces.forEach(function(piece) {
                    //foreach valid cells of ennemy pieces
                    piece.getValidCells().forEach(function(pieceCell) {
                        //if the cell isn't found in any of the ennemy valid cells, it stays false
                        if(pieceCell == kingCell)
                            validCell = true;
                    }, this);
                    whiteCheckMate = validCell;
                }, this);
            }, this);

            this.whiteKing.checkMate = whiteCheckMate;
        }
    }

    checkWinner()
    {

        if(this.whiteKing.checkMate)
            return 0;
        else if(this.blackKing.checkMate)
            return 1;
        else
            return -1;
        /*
        
        if(this.blackPieces.length == 0)
            return 1;
        else if(this.whitePieces.length == 0)
            return 0;
            

        let whiteKing = false;
        this.whitePieces.forEach(function(piece) {
            //the white king is still there
            if(piece instanceof King)
                whiteKing = true;
        }, this);

        let blackKing = false;
        this.blackPieces.forEach(function(piece) {
            if(piece instanceof King)
                blackKing = true;
        }, this);

        if(!whiteKing)
            return 0;
        else if(!blackKing)
            return 1;
        else
            return -1;
                */
    }

}
