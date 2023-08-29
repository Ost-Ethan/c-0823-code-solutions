const colors = ['red', 'white', 'blue'];
console.log('Value of colors[0] is ', colors[0]);
console.log('Value of colors[1] is ', colors[1]);
console.log('Value of colors[2] is ', colors[2]);

const america = colors[0] + ', ' + colors[1] + ', ' + 'and ' + colors[2] + '.';
console.log('America is', america);

colors[2] = 'green';
const mexico = colors[0] + ', ' + colors[1] + ', ' + 'and ' + colors[2] + '.';
console.log('Mexico is', mexico);
console.log('Value of colors:', colors);

const students = ['Jim', 'Jerry', 'Jose', 'James'];

const numberOfStudents = students.length;
console.log('There are', numberOfStudents, 'students in the class.');

const lastIndex = numberOfStudents - 1;
const lastStudent = students[lastIndex]; // can also do const lastStudent = students[students.length - 1]
console.log('The last student in the array is:', lastStudent);
console.log('Value of the students array:', students);
