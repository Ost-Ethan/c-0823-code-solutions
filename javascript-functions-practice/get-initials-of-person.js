/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  const firstInitial = person.firstName.charAt(0);
  const lastInitial = person.lastName.charAt(0);
  const fullInitials = firstInitial + lastInitial;
  return fullInitials;
}
