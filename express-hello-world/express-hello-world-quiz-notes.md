# express-hello-world-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is Express middleware?
  middleware is an application that is able to execute code, make changes to request and response objects and call other middleware functions
- What is Express middleware useful for?
  it can be used to handle requests at a certain pathname, and run callback functions when a path is accessed.
- How do you mount a middleware with an Express application?
  using the .use([path], callback) method
- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?
  it passes the HTTP requests and response objects. and it completes the asociated actions for the requests.

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
