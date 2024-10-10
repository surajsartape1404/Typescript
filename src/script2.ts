// program 1.........

let names: string = "virat";
let age: number = 24
let isPlayer: boolean = true
console.log('Name:${names} Age:${age} IsPlayer:${isStudent}')

// Program 2.......
// Array example

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let names1: string[] = ["suraj", "sartape"]
console.log('${numbers}')
console.log('${names}')


// Program 3.......
// tuple examples

let person: [string, number] = ["suraj", 7895246125]
let email: [string, number] = ["surajsartape", 1404]

// Program 4........
// enum

enum color {
    yellow = 1,
    blue,
    green
}

let favcolor: color = color.yellow
console.log(color.yellow)

// Program 5.........
// union

let password: string | number = 1404
password = "suraj"

