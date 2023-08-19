import { FunctionComponent } from 'react';

import useLogin from './hooks/useLogin';

const LoginContainer: FunctionComponent = () => {
  const {
    email,
    handleEmailChange,
    password,
    handlePasswordChange,
    error,
    handleSubmitClick,
  } = useLogin();

  return (
    <div>
      <div>Login</div>
      <input
        type="text"
        value={email}
        placeholder="Insert your email"
        onChange={handleEmailChange}
      />
      <input
        type="password"
        value={password}
        placeholder="Insert your password"
        onChange={handlePasswordChange}
      />
      {error && <span>Please check your email or password</span>}
      <button onClick={handleSubmitClick}>submit</button>
    </div>
  );
};

export default LoginContainer;
