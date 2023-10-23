import { readFile, writeFile } from 'node:fs/promises';

const database = await readFile('data.json', 'utf-8');
const resultData = await JSON.parse(database);
const [, , operation, source, target] = await process.argv;

// switch statment on what code to run based on the value of operation
try {
  switch (operation) {
    case 'create':
      createNewEntry(source);
      break;
    case 'read':
      readEntries(source);
      break;
    case 'update':
      updateEntry(source, target);
      break;
    case 'delete':
      deleteEntry(source);
      break;
    default:
      throw new Error('Not a valid operation');
  }
} catch (error) {
  console.error(error);
}

// After the switch statment we will stringify our updated JSON and reassign it to data.json
const updatedjson = JSON.stringify(resultData, null, 2);
writeFile('data.json', updatedjson);

// function declarations.
function createNewEntry(source) {
  resultData.notes[resultData.nextId] = source;
  resultData.nextId++;
  console.log('updated result data', resultData);
}

function readEntries(source) {
  if (source !== undefined) {
    console.log(resultData.notes[source]);
  } else {
    console.log(resultData.notes);
  }
}

function updateEntry(source, target) {
  resultData.notes[source] = target;
  console.log('updated notes', resultData);
}

function deleteEntry(source) {
  delete resultData.notes[source];
  console.log('notes after deleted', resultData);
}
