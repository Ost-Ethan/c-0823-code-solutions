/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  const personInfo =
    person.name +
    ' is a ' +
    person.occupation +
    ' from ' +
    person.birthPlace +
    '.';
  return personInfo;
}
