# Odin Etch-a-sketch

## Description

This project is similar to an etch-a-sketch except instead of using two knobs to control cursor position, the user uses the mouse. As the mouse moves over the grid, the squares that were touched turn from white to black.

The purpose of this project was to practice using DOM manipulation principles learned in the Javascript portion of The Odin Project: Fundamentals course.

## Languages Used

- HTML
- CSS
- Javascript

## How to use

Upon loading `index.html`, the user can begin "drawing" by moving the cursor over the default 16x16 grid. As the cursor moves over individual squares of the grid, those individual square turn from white to black. The user also has the ability to resize the grid by specifying an integer that will determine the number of rows and columns of the new grid.

## Future Fixes

As is, the prompt asking the user for a number to resize the gird, nothing is prevent the user from inputting something other than an integer. If the user enters something other than an integer, the grid is erased and no new squares are populated. Because I felt it was out of the scope of this project, this will be something to tackle in the future.