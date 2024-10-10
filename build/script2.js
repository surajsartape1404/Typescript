"use strict";
// program 1.........
let names = "virat";
let age = 24;
let isPlayer = true;
console.log('Name:${names} Age:${age} IsPlayer:${isStudent}');
// Program 2.......
// Array example
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let names1 = ["suraj", "sartape"];
console.log('${numbers}');
console.log('${names}');
// Program 3.......
// tuple examples
let person = ["suraj", 7895246125];
let email = ["surajsartape", 1404];
// Program 4........
// enum
var color;
(function (color) {
    color[color["yellow"] = 1] = "yellow";
    color[color["blue"] = 2] = "blue";
    color[color["green"] = 3] = "green";
})(color || (color = {}));
let favcolor = color.yellow;
console.log(color.yellow);
// Program 5.........
// union
let password = 1404;
password = "suraj";
