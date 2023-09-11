# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  to ensure things work properly
- What is the purpose of events and event handling?
  to make code reactive to what is happening.
- Are all possible parameters required to use a JavaScript method or function?
  no
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  .addEventListener
- What is a callback function?
  a function that is given as an argument, like an event listener in this case
- What object is passed into an event listener callback when the event fires?
  the object the eventlistener is being added to.
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  you can print the target in the eventhandler
- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```
  handleClick in the second example is not valid, as handleClick is a pointer to the function

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
