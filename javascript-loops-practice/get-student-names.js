/* exported getStudentNames */
function getStudentNames(students) {
  const nameArray = [];

  for (const keys in students) {
    //  console.log("value of keys:", students[keys].name);
    nameArray.push(students[keys].name);
  }
  return nameArray;
}
