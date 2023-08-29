const student = {
  firstname: 'Ethan ',
  lastname: 'Ostrowski',
  age: 22,
};

const fullName = student.firstname + student.lastname;
console.log('Value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Consultant';
console.log('Value of student.previousoccupation', student.previousOccupation);
console.log('Value of student.livesInIrvine', student.livesInIrvine);
console.log('Value of student object', student);

const vehicle = {
  make: 'chevy',
  model: 'camero',
  year: 2011,
};

vehicle['color'] = 'green';
vehicle['isConvertable'] = false;

console.log('Value of vehicle[color]', vehicle['color']);
console.log('Value of vehicle[isConvertible]', vehicle['isConvertable']);
console.log('Value of the vehicle object:', vehicle);

const pet = {
  name: 'Jerry',
  type: 'Fish',
};

delete pet.type;
delete pet.name;
console.log('Value of pet', pet);
