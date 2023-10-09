# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
  ReturnedVariable = (params) => code body
- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
  you can't specify the return value when not using curly braces.
- When using _concise body syntax_, how do you return an object literal?
  using parantheses around the object being defined.
- In the expression
  ```js
  foo(() => 42);
  ```
  - Identify the arrow function
    () => 42
  - How many arguments does the arrow function take?
    none
  - What value does it return?
    42
  - How many arguments are passed to the function `foo`?
    one
  - What type of argument is passed to the function `foo`?
    a function
- In the expression
  ```js
  bar((y) => {
    console.log(`4y = ${4 * y}`);
  });
  ```
  - Identify the arrow function
    (y) => {console.log(`4y = ${4 * y}`);}
  - How many arguments does the arrow function take?
    one
  - What value does it return?
    a template literal with the expression 4 \* y
  - How many arguments are passed to the function `bar`?
    1
  - What type of argument is passed to the function `bar`?
    an arrow function
  - When does the arrow function's code get executed?
    when bar is called
- How does the value of `this` differ between standard functions and arrow functions?
  this should not be used as a method of an object in an arrow function.

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
