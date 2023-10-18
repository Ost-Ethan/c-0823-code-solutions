import read from './read.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = () => `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function throwOnce() {
  // Note: In the `catch` we are logging just `error.message` for illustration
  // purposes. In actual code you will want to log the entire error so that
  // you get the stack trace.
  try {
    const falseRead = await read('foo', false);
    console.log(elapsed(), 'throwOnce:', falseRead);
  } catch (error) {
    console.log(elapsed(), 'throwOnce Error:', error.message);
  }
}

async function throwSeveral() {
  // Note: In the `catch` we are logging just `error.message` for illustration
  // purposes. In actual code you will want to log `error` so that
  // you get the stack trace.\
  try {
    const read1 = await read('foo1', false);
    console.log(elapsed(), 'throwSeveral1:', read1);
    const read2 = await read('foo2', false);
    console.log(elapsed(), 'throwSeveral2:', read2);
    const read3 = await read('foo3', false);
    console.log(elapsed(), 'throwSeveral3:', read3);
  } catch (error) {
    console.log(elapsed(), 'throwSeveral Error:', error.message);
  }
}

async function throwChained() {
  try {
    const read1 = await read('foo-chain', true);
    console.log(elapsed(), 'throwChained1:', read1);
    const read2 = await read(read1, false);
    console.log(elapsed(), 'throwChained2:', read2);
    const read3 = await read(read2, false);
    console.log(elapsed(), 'throwChained3:', read3);
  } catch (error) {
    console.log(elapsed(), 'throwChained Error:', error.message);
  }
}

await throwOnce();
await throwSeveral();
await throwChained();
