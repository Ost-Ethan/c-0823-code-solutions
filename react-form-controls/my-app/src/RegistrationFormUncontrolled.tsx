import { FormEvent } from 'react';

export default function UncontrolledForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formdata = new FormData(event.currentTarget);
    const something = Object.fromEntries(formdata.entries());
    console.log(something);
  }

  return (
    <form id="uncontrolled" onSubmit={handleSubmit}>
      <label htmlFor="username">UserName: </label>
      <input type="text" name="username" />
      <label htmlFor="password">Password: </label>
      <input type="text" name="password" />
      <button>Submit</button>
    </form>
  );
}
