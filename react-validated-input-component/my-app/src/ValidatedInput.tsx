import { ChangeEvent, useState } from 'react';
import { ImCross, ImCheckmark } from 'react-icons/im';
import './ValidatedInput.css';

export default function ValidatedInput() {
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('A password is required.');
  const [statusIcon, setStatusIcon] = useState(
    <ImCross className="wrong-input" />
  );

  function handleValidation(e: ChangeEvent<HTMLInputElement>) {
    if (e.currentTarget.value === '') {
      setErrorText('A password is required.');
      setStatusIcon(<ImCross className="wrong-input" />);
    } else if (e.currentTarget.value.length < 8) {
      setErrorText('Your password is too short.');
      setStatusIcon(<ImCross className="wrong-input" />);
    } else {
      setErrorText('');
      setStatusIcon(<ImCheckmark className="right-input" />);
      console.log('passed error checks');
    }

    console.log('changed');
  }

  return (
    <div>
      <label htmlFor="password">Password:</label>
      <input
        value={password}
        onChange={(e) => {
          setPassword(e.target.value), handleValidation(e);
        }}
        name="password"
        type="text"
      />
      <span className="icon">{statusIcon}</span>
      <div className="wrong-input">{errorText}</div>
    </div>
  );
}
