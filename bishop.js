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

class Bishop extends Piece
{
    /**
     * Created a Bishop chess piece
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

        //up left
        for(let i = 1; i < this.cell.x+1 && i < this.cell.y+1; i++)
        {
            let currentCell = board.cells[this.cell.x-i][this.cell.y-i];
            if(currentCell.team == this.team)
                break;
            validCells.push(currentCell);
            if(currentCell.team != -1)
                break;
        }
        
        
        //down right
        for(let i = 1; this.cell.x+i < cols && this.cell.y+i < rows; i++)
        {
            let currentCell = board.cells[this.cell.x+i][this.cell.y+i];
            if(currentCell.team == this.team)
                break;
            validCells.push(currentCell);
            if(currentCell.team != -1)
                break;
        }
     
        //down left
        for(let i = 1; this.cell.x-i >= 0 && this.cell.y+i < rows; i++)
        {
            let currentCell = board.cells[this.cell.x-i][this.cell.y+i];
            if(currentCell.team == this.team)
                break;
            validCells.push(currentCell);
            if(currentCell.team != -1)
                break;
        }
        

        //up right
        for(let i = 1; this.cell.x+i < cols && this.cell.y-i >= 0; i++)
        {
            let currentCell = board.cells[this.cell.x+i][this.cell.y-i];
            if(currentCell.team == this.team)
                break;
            validCells.push(currentCell);
            if(currentCell.team != -1)
                break;
        }

        return validCells;
    }
}