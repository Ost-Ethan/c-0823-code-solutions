function ExampleConstructor() {}
console.log('Prototype of ExampleConstructor:', ExampleConstructor.prototype);
console.log(
  'typeof ExampleConstructor.prototype:',
  typeof ExampleConstructor.prototype
);

const newExamConstructor = new ExampleConstructor();

console.log('Value of newExamConstructor:', newExamConstructor);
console.log(
  'instance of newExamConstructor:',
  newExamConstructor instanceof ExampleConstructor
);
