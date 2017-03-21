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

class Knight extends Piece
{
    /**
     * Created a Knight chess piece
     * @param {Cell} cell 
     * @param {Number} team 
     */
    constructor(cell,team,texture)
    {
        super(cell,team,texture)
    }
    
    getValidCells()
    {
        let validCells = new Array();
        let currentCell;
        //up right
        if(this.cell.x+1 < cols && this.cell.y-2 >= 0)
        {
            currentCell = board.cells[this.cell.x+1][this.cell.y-2];
            if(currentCell.team != this.team)
                validCells.push(currentCell);
        }
        //right up
        if(this.cell.x+2 < cols && this.cell.y-1 >= 0)
        {
            currentCell = board.cells[this.cell.x+2][this.cell.y-1];
            if(currentCell.team != this.team)
                validCells.push(currentCell);
        }
        //right down
        if(this.cell.x+2 < cols && this.cell.y+1 < rows)
        {
            currentCell = board.cells[this.cell.x+2][this.cell.y+1];
            if(currentCell.team != this.team)
                validCells.push(currentCell);
        }
        //down right
        if(this.cell.x+1 < cols && this.cell.y+2 < rows)
        {
            currentCell = board.cells[this.cell.x+1][this.cell.y+2];
            if(currentCell.team != this.team)
                validCells.push(currentCell);
        }
        //down left
        if(this.cell.x-1 >= 0 && this.cell.y+2 < rows)
        {
            currentCell = board.cells[this.cell.x-1][this.cell.y+2];
            if(currentCell.team != this.team)
                validCells.push(currentCell);
        }
        //left down
        if(this.cell.x-2 >= 0 && this.cell.y+1 < rows)
        {
            currentCell = board.cells[this.cell.x-2][this.cell.y+1];
            if(currentCell.team != this.team)
                validCells.push(currentCell);
        }
        //left up
        if(this.cell.x-2 >= 0 && this.cell.y-1 >= 0)
        {
            currentCell = board.cells[this.cell.x-2][this.cell.y-1];
            if(currentCell)
                if(currentCell.team != this.team)
                    validCells.push(currentCell);
        }
        //up left
        if(this.cell.x-1 >= 0 && this.cell.y-2 >= 0)
        {
            currentCell = board.cells[this.cell.x-1][this.cell.y-2];
            if(currentCell.team != this.team)
                validCells.push(currentCell);
        }
        
        return validCells;
    }
}