import { FunctionComponent } from 'react';

import useLogin from './hooks/useLogin';

const LoginContainer: FunctionComponent = () => {
  const { errors, register, handleSubmit, onSubmit } = useLogin();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>Login</div>
      <input
        type="text"
        placeholder="Insert your email"
        {...register('email', { required: true })}
        area-invalid={errors.email ? 'true' : 'false'}
      />
      <input
        type="password"
        placeholder="Insert your password"
        {...register('password', { required: true })}
        aria-invalid={errors.password ? 'true' : 'false'}
      />
      {(errors.email || errors.password) && (
        <div>Please enter your email or password</div>
      )}
      {errors.dataError && <div>{errors.dataError.message}</div>}
      <input type="submit" />
    </form>
  );
};

export default LoginContainer;
