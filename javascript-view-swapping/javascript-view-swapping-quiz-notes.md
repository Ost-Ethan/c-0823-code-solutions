# javascript-view-swapping-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  the element the event was triggered on
- What is the affect of setting an element to `display: none`?
  it does not display the element on the page
- What does the `element.matches()` method take as an argument and what does it return?
  element.matches takes css selectors and returns a true or false value if the element matches or does not match the selector
- How can you retrieve the value of an element's attribute?
  element.getAttribute(attribute)
- At what steps of the solution would it be helpful to log things to the console?
  whenever you want to make sure something is working, all steps
- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your JavaScript code be written instead?
  we would have to apply an event listener to every button element, and then use the events from the buttons to change the tabs.
- If you didn't use a loop to conditionally show or hide the views in the page, how would your JavaScript code be written instead?
  if else statements on each index of the Nodelist for each tab.

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
