# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  async allows a function to use await, where await can be used to wait for the result of another function.
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  await waits for the result of the promise, if it succeeds or returns an error if it fails.
- When do you use `async`?
  when you have to wait for data in a function.
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  only await if you know the variable is a promise.
- How do you handle errors with `await`?
  with a try catch statement
- What do `try`, `catch` and `throw` do? When do you use them?
  try will run the code body. if an error has occured, usually in the form of a rejected promise, it will stop executing the try, and will go and execute the following catch code body instead.
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  if the variable the promise is assigned to is called, then it will return a pending promise.
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  async await because it is easiest and required the least code.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
