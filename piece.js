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

class Piece
{
    /**
     * Create a generic pice at a given cell of a given team
     * @param {Cell} cell
     * @param {Number} team
     */
    constructor(cell,team,texture)
    {
        this.cell = cell;
        this.cell.team = team;
        this.team = team;
        this.texture = texture;
        team == 0 ? this.color = pieceBlack : this.color = pieceWhite;
        this.hasMoved = false;

        this.validCells = new Array();

    }

    /**
     * Draws the piece on the screen
     */
    draw()
    {
        //fill(this.color);
        //noStroke();
        //ellipse(this.cell.centerX,this.cell.centerY,size/1.5);
        image(this.texture,this.cell.absoluteX,this.cell.absoluteY,this.cell.size,this.cell.size);
    }
    
    /**
     * Move to a valid cell and eat the piece on it
     * @param {Cell} cell
     */
    moveTo(cell)
    {
        this.hasMoved = true;
        this.cell.team = -1;
        board.takeOver(cell);
        cell.team = this.team;

        this.cell = cell;
    }

    updateValidCells()
    {
        this.validCells = this.getValidCells();
        board.colorCells(this.validCells);
    }
}
