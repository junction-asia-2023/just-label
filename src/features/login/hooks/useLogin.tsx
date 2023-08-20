import { useForm, SubmitHandler } from 'react-hook-form';
import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';

import { setItem } from '../../shared/utils/storage';
import { DummyUser, InputKey } from '../type';
import { DUMMY_USER, DUMMY_USERS } from '../constants';
import { userAtom } from '../atom';
import { URL } from '../../shared/constants/url';

const useLogin = () => {
  const [, setUser] = useAtom(userAtom);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputKey>();
  const onSubmit: SubmitHandler<InputKey> = (data) => {
    if (
      DUMMY_USERS.find((user) => user.email === data.email) &&
      DUMMY_USERS.find((user) => user.password === data.password)
    ) {
      const curUser: DummyUser = {
        ...DUMMY_USERS.find((user) => user.email === data.email),
      };
      delete curUser.password;
      setUser({ ...curUser });
      setItem('user', curUser);
      navigate(URL.home);
    } else {
      alert('No user information');
      return;
    }
  };

  const navigate = useNavigate();

  return {
    errors,
    register,
    handleSubmit,
    onSubmit,
  };
};

export default useLogin;
