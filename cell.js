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

class Cell
{
    /**
     * Creates a cell for a chess board
     * @param {String} name 
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} size 
     * @param {String} color 
     */
    constructor(name,x,y,size,color)
    {
        this.name = name;
        this.size = size
        this.x = x;
        this.y = y;

        this.absoluteX = x*size;
        this.absoluteY = y*size;
        this.centerX = this.x*size+this.size/2;
        this.centerY = this.y*size+this.size/2;

        this.color = color;
        this.highlight = false;
        this.team = -1;

    }

    draw()
    {
        if(this.highlight)
            fill(lerpColor(color(this.color),color("#f00"),.5));
        else
            fill(this.color);

        noStroke();
        rect(this.absoluteX,this.absoluteY,this.size,this.size);
        fill(0);

        textSize(14);
        //text(this.name,this.absoluteX,this.absoluteY+size);
        //text(this.team,this.absoluteX,this.absoluteY+size-15);

    }
}
