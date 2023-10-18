import { readFile, writeFile } from 'node:fs/promises';

const clArgs = process.argv.slice(2);
let fileBool = true;
try {
  const readfile1 = await readFile(clArgs[0], 'utf8');
  console.log(readfile1);
} catch (error) {
  console.log('Filepath not found error: ', error);
  fileBool = false;
}

if (fileBool === false) {
  try {
    writeFile(clArgs[0], clArgs[1]);
    console.log('Created new file');
  } catch (error) {
    console.log(error);
  }
}
