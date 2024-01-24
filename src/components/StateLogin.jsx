import { useRef } from "react";
export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmiton = (e) => {
    e.preventDefault();

    const valueEmail = emailRef.current.value;
    const valuePassword = passwordRef.current.value;

    console.log(valueEmail, valuePassword);
  };

  return (
    <form onSubmit={handleSubmiton}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={emailRef} />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={passwordRef}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
