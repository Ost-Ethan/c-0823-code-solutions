# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  they can be used to conditionally run code based on truthy or falsy values, they can be used to evalutate truthy or falsy expressions outside of if statements.
- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  short circut evaluation is when a true or false is evaluated and it prevents further code in the expression from running. && will run untill it finds a falsy expression, whereas || will run untill it finds a truthy expression.
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  the nullish operator only runs the right operand when the left operand is null, as opposed to || OR which will run if it is a falsy value or null, as null is falsy
- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  functionally identical to if else, where as ? is the if, and : is the else
- What is the `?.` (optional chaining) operator? When would you use it?
  optional chaining is when you would want to store a value if it is present, otherwise if the left operand is not defined it returns undefined.
- What is `...` (spread) syntax? How do you use it with arrays and objects?
  ...(variableName), it basically copies the values from the variable you call with it, to which you can make properties on objects or entries in an array with.
- What data types can be spread into an array? Into an object?
  all types of data can be spread, but the spread only goes one level deep, so object properties are not spread, or array values.
- How does spread syntax differ from rest syntax?
  they are the same

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
