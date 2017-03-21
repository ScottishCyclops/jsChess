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

class Rook extends Piece
{
    /**
     * Created a Rook chess piece
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

        //left
        if(this.cell.x != 0)
            for(let x = this.cell.x-1; x >= 0; x--)
            {
                let currentCell = board.cells[x][this.cell.y];
                if(currentCell.team == this.team)
                    break;
                validCells.push(currentCell);
                if(currentCell.team != -1)
                    break;
            }
        //right
        if(this.cell.x != cols-1)
            for(let x = this.cell.x+1; x <= cols-1; x++)
            {
                let currentCell = board.cells[x][this.cell.y];
                if(currentCell.team == this.team)
                    break;
                validCells.push(currentCell);
                if(currentCell.team != -1)
                    break;
            }
        //up
        if(this.cell.y != 0)
            for(let y = this.cell.y-1; y >= 0; y--)
            {
                let currentCell = board.cells[this.cell.x][y];
                if(currentCell.team == this.team)
                    break;
                validCells.push(currentCell);
                if(currentCell.team != -1)
                    break;
            }
        //down
        if(this.cell.y != rows-1)
            for(let y = this.cell.y+1; y <= cols-1; y++)
            {
                let currentCell = board.cells[this.cell.x][y];
                if(currentCell.team == this.team)
                    break;
                validCells.push(currentCell);
                if(currentCell.team != -1)
                    break;
            }

        return validCells;
    }
}
