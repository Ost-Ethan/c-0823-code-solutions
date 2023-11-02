# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
  aftter its first render
- What is a React Effect?
  an effect is code that is triggered after every render of the component
- When should you use an Effect and when should you not use an Effect?
  you should not use an effect when it adjusts the component itself in some way after rendering, that should be usestate or an event handler, however if you need the component to wait for API information, or animate, it should be in an effect.
- When do Effects run?
  after a component is rendered
- What function is used to declare an Effect?
  useEffect(function)
- What are Effect dependencies and how do you declare them?
  dependencies are the requirements for a useEffect to fire. they are delclared in sqaure brackets as a second arguement in useEffect
- Why would you want to clean up from an Effect?
  Some listeners, or other ongoing tasks from the first useEffect are not terminated on a subseqent re-render.
- How do you clean up from an Effect?
  by specifiying a return function that ends whatever the componenet called in it's useEffect
- When does the cleanup function run?
  when a compnent unmounts.

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
