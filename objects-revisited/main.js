const business = {
  opens: '8AM',
  closes: '4PM',
  totalEmployees: 4,
  daysOpen: ['M', 'Tu', 'W', 'Th', 'F'],
  employees: {
    John: {
      position: 'Barista',
      daysOfWeekWorking: ['M', 'Tu', 'W'],
    },
    Jimmy: {
      position: 'Manager',
      daysOfWeekWorking: ['M', 'Tu', 'W', 'Th', 'F'],
    },
    Jones: {
      position: 'Barista',
      daysOfWeekWorking: ['Th', 'F'],
    },
    Jumbo: {
      position: 'Janitor',
      daysOfWeekWorking: ['Tu', 'Th'],
    },
  },
};

function addWeekends() {
  const { daysOpen, employees } = business;
  daysOpen.push('Sat');
  daysOpen.unshift('Sun');
  for (const workers in employees) {
    if (employees[workers].daysOfWeekWorking.includes('Sat') === false) {
      employees[workers].daysOfWeekWorking.push('Sat');
    }
    if (employees[workers].daysOfWeekWorking.includes('Sun') === false)
      employees[workers].daysOfWeekWorking.unshift('Sun');
  }
}

function addEmployees() {
  const { employees } = business;
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.send();
  xhr.addEventListener('load', function () {
    // adds the first 4 employees from the source XMHttpRequest and gives them a unique job title
    employees[xhr.response[0].name] = xhr.response[0];
    employees[xhr.response[0].name].position = 'Super Barista';
    employees[xhr.response[1].name] = xhr.response[1];
    employees[xhr.response[1].name].position = 'Mega Janitor';
    employees[xhr.response[2].name] = xhr.response[2];
    employees[xhr.response[2].name].position = 'Floor Mopper Supreme';
    employees[xhr.response[3].name] = xhr.response[3];
    employees[xhr.response[3].name].position = 'Trash Collector';

    applyWorkingDays(employees);
    updateTotalEmployees(employees);
  });
}

function applyWorkingDays(employees) {
  // Give Each new employee 1 to 5 weekday workdays at random, everyone will be scheduled to work weekends
  // For each Employee

  // For loop that determines how many days are worked with a random number, randomNumberOfDays, and then chooses strings randomly for the length of randomNumberOfDays using the variable randomDaysWorked, then sets that array of strings as the .daysOfWeekWorking property for each employee that doesn't have a defined .daysOfWeekWorking property.
  for (const days in employees) {
    // Generate a number of days worked
    const randomDaysSelected = [];
    const randomNumberOfDays = Math.floor(Math.random() * 5) + 1;
    const numbersGenerated = [];
    for (let a = 0; a < randomNumberOfDays; a++) {
      const randomDaysWorked = Math.floor(Math.random() * 5) + 1;
      if (numbersGenerated.includes(randomDaysWorked) === false) {
        switch (randomDaysWorked) {
          case 1:
            randomDaysSelected.push('M');
            break;
          case 2:
            randomDaysSelected.push('Tu');
            break;
          case 3:
            randomDaysSelected.push('W');
            break;
          case 4:
            randomDaysSelected.push('Th');
            break;
          case 5:
            randomDaysSelected.push('F');
        }
        numbersGenerated.push(randomDaysWorked);
      }
    }

    if (employees[days].daysOfWeekWorking === undefined) {
      randomDaysSelected.push('Sat');
      randomDaysSelected.push('Sun');
      employees[days].daysOfWeekWorking = randomDaysSelected;
    }
  }
}

function updateTotalEmployees(employees) {
  // Gives Each employee a fullTime property if they work more than 5 days a week. Also counts the employees and reassigns the totalEmployees variable.
  business.totalEmployees = 0;
  for (const keys in employees) {
    business.totalEmployees += 1;
    if (employees[keys].daysOfWeekWorking.length >= 5) {
      employees[keys].fullTime = true;
    } else {
      employees[keys].fullTime = false;
    }
  }
}

function deleteEmployee(employeeName) {
  const { employees } = business;
  delete employees[employeeName];
  updateTotalEmployees(employees);
}

document.addEventListener('DOMContentLoaded', function () {
  addWeekends();
  updateTotalEmployees(business.employees);
  addEmployees(business.employees);
  deleteEmployee('Jumbo');
});
