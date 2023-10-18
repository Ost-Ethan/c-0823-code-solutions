import { readFile, writeFile } from 'node:fs/promises';

const [, , source, dest] = process.argv;
try {
  const sourceContents = await readFile(source);
  await writeFile(dest, sourceContents);
} catch (error) {
  console.log(error);
}
