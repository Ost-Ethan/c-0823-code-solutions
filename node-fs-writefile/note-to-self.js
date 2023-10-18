import { writeFile } from 'node:fs/promises';

try {
  const clArg = process.argv[2];
  await writeFile('note.txt', `${clArg} \n`);
} catch (error) {
  console.log(error);
}
