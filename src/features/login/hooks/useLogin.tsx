import { ChangeEventHandler, ReactEventHandler, useState } from 'react';
import { useAtom } from 'jotai';

import { setItem } from '../../shared/utils/storage';
import { DummyUser } from '../type';
import { DUMMY_USER } from '../constants';
import { userAtom } from '../atom';

const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [, setUser] = useAtom(userAtom);

  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
    setError(false);
  };
  const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
    setError(false);
  };
  const handleSubmitClick: ReactEventHandler<HTMLButtonElement> = () => {
    if (DUMMY_USER.email !== email || DUMMY_USER.password !== password) {
      setError(true);
      return;
    }
    const curUser: DummyUser = { ...DUMMY_USER };
    delete curUser.password;
    setUser({ ...curUser });
    setItem('user', curUser);
    // TODO: Redirect Home;
  };

  return {
    email,
    handleEmailChange,
    password,
    handlePasswordChange,
    error,
    handleSubmitClick,
  };
};

export default useLogin;
