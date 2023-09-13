# dom-creation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Does the `document.createElement()` method insert a new element into the page?

      text character
      no, it only creates one

- How do you add an element as a child to another element?
  node.appendchild()
- What do you pass as the arguments to the `element.setAttribute()` method?
  you pass the name of the attribute you want to add, and a value to the attribute you are adding.
- What steps do you need to take in order to insert a new element into the page?
  you first need to declare an element, then set the class to alert, fill the element with content, and then append the element in the html page
- What is the `textContent` property of an element object for?
  the textContent property displays all text in an element, white innerText only holds what is visible to the page, so a span with a display hidden propery will be shown with textContent, but not with innerText
- Name two ways to set the `class` attribute of a DOM element.
  the element.className property and the element.setAttribute() function
- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
  you can add multiple elements without having to set classes and attributes manually for every element

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
