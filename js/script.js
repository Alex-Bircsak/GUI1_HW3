/*
File: script.js
GUI Assignment: Creating an Interactive Dynamic Table
Alex Bircsak, UMass Lowell Computer Science, alex_bircsak@student.uml.edu
Copyright (c) 2021 by Alex. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
updated by AB on July 31, 2021
Description: javascript function for dynamically creating a multiplication table
Source: https://www.w3schools.com/ pages for javascript used for reference.
*/

function makeTable() {
    console.log("Running makeTable()");
    var x1 = Number(document.getElementById("x1").value);
    var x2 = Number(document.getElementById("x2").value);
    var y1 = Number(document.getElementById("y1").value);
    var y2 = Number(document.getElementById("y2").value);
    console.log("x1 =", x1, ", x2 =", x2, ", y1 =", y1, ", y2 =", y2);

    // Create a new table end remove any existing table from tableDiv.
    var div = document.getElementById("tableDiv");
    div.removeChild(div.firstChild);
    var mult = document.createElement("table");

    // Input validation
    if (x1 > x2) {
        errorMsg("Starting multiplier can't be bigger than ending multiplier!");
        return;
    }
    else if (y1 > y2) {
        errorMsg("Starting multiplicand can't be bigger than ending multiplier!");
        return;
    }
    else {;}

    // Create the top row.
    var row = document.createElement("tr");
    var hcell = document.createElement("th");
    row.appendChild(hcell);
    for (let j = x1; j <= x2; j++) {
        var hcell = document.createElement("th");
        hcell.innerText = j;
        row.appendChild(hcell);
    }
    mult.appendChild(row);

    // Create 
    for (let i = y1; i <= y2; i++) {
        var row = document.createElement("tr");

        // Create header column cell.
        var hcell = document.createElement("th");
        hcell.innerText = i;
        row.appendChild(hcell);

        // Create each cell in the row.
        for (let j = x1; j <= x2; j++) {
            var cell = document.createElement("td");
            cell.innerText = i * j;
            row.appendChild(cell);
        }

        mult.appendChild(row);
    }

    div.appendChild(mult);
}

// Error catching function.
function errorMsg (e) {
    var div = document.getElementById("tableDiv");
    div.removeChild(div.firstChild);
    var p = document.createElement("p");
    p.innerText = e;
    div.appendChild(p);
}