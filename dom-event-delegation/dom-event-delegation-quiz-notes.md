# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  it is always the element the event occured on, i.e. a click on a button will return the button element as event.target.
- Why is it possible to listen for events on one element that actually happen its descendent elements?
  becasue of how event captuing/bubbling works
- What DOM element property tells you what type of element it is?
  .tagName
- What does the `element.closest()` method take as its argument and what does it return?
  it takes a css selector as its arguement, and returns the first element that matches that selector, starting at the element object specificed.
- How can you remove an element from the DOM?
  element.remove()
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  putting a listener on the parent and using closest() to find the closest element to the event

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
