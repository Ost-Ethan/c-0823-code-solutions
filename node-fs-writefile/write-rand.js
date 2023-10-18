import { writeFile } from 'node:fs/promises';

try {
  await writeFile('random.txt', `${Math.random()}\n`);
} catch (error) {
  console.log(error);
}
