const fs = require('fs');

let students = [
    {name: 'agus'},
    {name: 'ajeng'},
    {name: 'joko'}
];

fs.writeFileSync('./students.json', JSON.stringify(students, null, 2));

let file = fs.readFileSync('./students.json', 'utf-8');
console.log(file);