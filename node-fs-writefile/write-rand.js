import { writeFile } from 'node:fs/promises';

try {
  await writeFile('random.txt', `${Math.random()}\n`, 'utf-8');
} catch (error) {
  console.log(error);
}
