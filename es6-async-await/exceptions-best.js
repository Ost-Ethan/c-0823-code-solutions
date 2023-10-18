import read from './read.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = () => `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function throwOnce() {
  // Note: In the `catch` we are logging just `error.message` for illustration
  // purposes. In actual code you will want to log the entire error so that
  // you get the stack trace.
  const falseRead = await read('foo', true);
  console.log(elapsed(), 'throwOnce:', falseRead);
}

async function throwSeveral() {
  // Note: In the `catch` we are logging just `error.message` for illustration
  // purposes. In actual code you will want to log `error` so that
  // you get the stack trace.\
  const read1 = await read('foo1', false);
  console.log(elapsed(), 'throwSeveral1:', read1);
  const read2 = await read('foo2', false);
  console.log(elapsed(), 'throwSeveral2:', read2);
  const read3 = await read('foo3', false);
  console.log(elapsed(), 'throwSeveral3:', read3);
}

async function throwChained() {
  const read1 = await read('foo-chain', true);
  console.log(elapsed(), 'throwChained1:', read1);
  const read2 = await read(read1, false);
  console.log(elapsed(), 'throwChained2:', read2);
  const read3 = await read(read2, false);
  console.log(elapsed(), 'throwChained3:', read3);
}

try {
  await throwOnce();
  await throwSeveral();
  await throwChained();
} catch (error) {
  console.log(error);
}
