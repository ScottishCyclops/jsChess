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

class Pawn extends Piece
{
    /**
     * Created a Pawn chess piece
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

        if(this.team == 0)
        {
            //down
            if(this.cell.y != rows-1)
            {
                let currentCell = board.cells[this.cell.x][this.cell.y+1];
                if(currentCell.team == -1)
                {
                    validCells.push(currentCell);
                    currentCell = board.cells[this.cell.x][this.cell.y+2];
                    if(!this.hasMoved && this.cell.y < rows-1 && currentCell.team == -1)
                    {
                        validCells.push(currentCell);
                    }
                }
                if(this.cell.x != 0)
                {
                    //left bite
                    let currentCell = board.cells[this.cell.x-1][this.cell.y+1];
                    if(currentCell.team == 1)
                        validCells.push(currentCell);
                }
                if(this.cell.x != cols-1)
                {
                    //right bite
                    let currentCell = board.cells[this.cell.x+1][this.cell.y+1];
                    if(currentCell.team == 1)
                        validCells.push(currentCell);
                }
            }
        }
        else if(this.team == 1)
        {
            //up
            if(this.cell.y != 0)
            {
                let currentCell = board.cells[this.cell.x][this.cell.y-1];
                if(currentCell.team == -1)
                {
                    validCells.push(currentCell);
                    currentCell = board.cells[this.cell.x][this.cell.y-2];
                    if(!this.hasMoved && this.cell.y > 1 && currentCell.team == -1)
                    {
                        validCells.push(currentCell);
                    }
                }
                
                if(this.cell.x != 0)
                {
                    //left bite
                    let currentCell = board.cells[this.cell.x-1][this.cell.y-1];
                    if(currentCell.team == 0)
                        validCells.push(currentCell);
                }
                if(this.cell.x != cols-1)
                {
                    //right bite
                    let currentCell = board.cells[this.cell.x+1][this.cell.y-1];
                    if(currentCell.team == 0)
                        validCells.push(currentCell);
                }
            }
        }
        
        return validCells;
    }
}