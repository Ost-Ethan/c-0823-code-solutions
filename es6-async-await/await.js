import read from './read.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = () => `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function readOnce() {
  const readBook = await read('foo/bar.html');
  console.log(elapsed(), 'readOnce:', readBook);
}

async function readSeveral() {
  const somethingElse = await read('foo1/bar.html');
  console.log(elapsed(), 'readSeveral1:', somethingElse);
  const kitchenSink = await read('foo2/bar.html');
  console.log(elapsed(), 'readSeveral2:', kitchenSink);
  const everythingElse = await read('foo3/bar.html');
  console.log(elapsed(), 'readSeveral3:', everythingElse);
}

async function readChained() {
  const whatIsThis = await read('foo-chain/bar.html');
  console.log(elapsed(), 'readChained1:', whatIsThis);
  const whatIsThis2 = await read(whatIsThis);
  console.log(elapsed(), 'readChained2:', whatIsThis2);
  const whatIsThis3 = await read(whatIsThis2);
  console.log(elapsed(), 'readChained3:', whatIsThis3);
}

await readOnce();
await readSeveral();
await readChained();
