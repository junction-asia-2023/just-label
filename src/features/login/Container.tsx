import { FunctionComponent } from 'react';

import useLogin from './hooks/useLogin';
import logo from './logo.png';
import './style/index.scss';

const LoginContainer: FunctionComponent = () => {
  const { errors, register, handleSubmit, onSubmit } = useLogin();

  return (
    <div className="login-container">
      <img src={logo} alt="cardme logo" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group">
          <label>Email</label>
          <input
            type="text"
            placeholder="Insert your email"
            {...register('email', { required: true })}
            area-invalid={errors.email ? 'true' : 'false'}
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Insert your password"
            {...register('password', { required: true })}
            aria-invalid={errors.password ? 'true' : 'false'}
          />
        </div>
        {(errors.email || errors.password) && (
          <div>Please enter your email or password</div>
        )}
        <a href="#">Forgot your password?</a>

        {errors.dataError && <div>{errors.dataError.message}</div>}
        <input type="submit" value="Login" />
      </form>
      <a href="#">Not signed up yet?</a>
    </div>
  );
};

export default LoginContainer;
