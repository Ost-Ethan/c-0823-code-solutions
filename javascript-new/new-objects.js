const anObject = new Object({ this: 'is', an: 'object' });
console.log('Value of anObject:', anObject);
console.log('Type of anObject:', typeof anObject);

const anArray = new Array();
console.log('Value of anArray:', anArray);
console.log('Type of anArray:', typeof anArray);

const aFunction = new Function();
console.log('Value of aFunction:', aFunction);
console.log('Type of aFunction:', typeof aFunction);

const aString = new String();
console.log('Value of aString:', aString);
console.log('Type of aString:', typeof aString);

const aNumber = new Number(0);
console.log('Value of aNumber:', aNumber);
console.log('Type of aNumber:', typeof aNumber);

const aBool = new Boolean();
console.log('Value of aBool:', aBool);
console.log('Type of aBool:', typeof aBool);
