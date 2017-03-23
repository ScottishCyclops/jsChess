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

class King extends Piece
{
    /**
     * Created a King chess piece
     * @param {Cell} cell 
     * @param {Number} team 
     */
    constructor(cell,team,texture)
    {
        super(cell,team,texture)
        this.checkMate = false;
        this.check = false;
    }

    getValidCells()
    {

        let validCells = new Array();

        //left
        if(this.cell.x != 0)
        {
            let currentCell = board.cells[this.cell.x-1][this.cell.y];
            if(currentCell.team != this.team)
                validCells.push(currentCell);
        }
        //right
        if(this.cell.x != cols-1)
        {
            let currentCell = board.cells[this.cell.x+1][this.cell.y];
            if(currentCell.team != this.team)
                validCells.push(currentCell);
        }
        //up
        if(this.cell.y != 0)
        {
            let currentCell = board.cells[this.cell.x][this.cell.y-1];
            if(currentCell.team != this.team)
                validCells.push(currentCell);
        }
            
        //down
        if(this.cell.y != rows-1)
        {
            let currentCell = board.cells[this.cell.x][this.cell.y+1];
            if(currentCell.team != this.team)
                validCells.push(currentCell);
        }

        //up left
        if(this.cell.x != 0 && this.cell.y != 0)
        {
            let currentCell = board.cells[this.cell.x-1][this.cell.y-1];
            if(currentCell.team != this.team)
                validCells.push(currentCell);
        }

        //down right
        if(this.cell.x != rows-1 && this.cell.y != cols-1)
        {
            let currentCell = board.cells[this.cell.x+1][this.cell.y+1];
            if(currentCell.team != this.team)
                validCells.push(currentCell);
        }
     
        //down left
        if(this.cell.x != 0 && this.cell.y != cols-1)
        {
            let currentCell = board.cells[this.cell.x-1][this.cell.y+1];
            if(currentCell.team != this.team)
                validCells.push(currentCell);
        }
        

        //up right
        if(this.cell.x != rows-1 && this.cell.y != 0)
        {
            let currentCell = board.cells[this.cell.x+1][this.cell.y-1];
            if(currentCell.team != this.team)
                validCells.push(currentCell);
        }

        return validCells;

    }
}