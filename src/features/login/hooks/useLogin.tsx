import { useForm, SubmitHandler } from 'react-hook-form';
import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';

import { setItem } from '../../shared/utils/storage';
import { DummyUser, InputKey } from '../type';
import { DUMMY_USER } from '../constants';
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
      DUMMY_USER.email !== data.email ||
      DUMMY_USER.password !== data.password
    ) {
      alert("'No user information'");
      // TODO: setError 띄웠다가 다시 삭제하는 방법
      // setError('dataError', { message: 'No user information' });
      return;
    }
    const curUser: DummyUser = { ...DUMMY_USER };
    delete curUser.password;
    setUser({ ...curUser });
    setItem('user', curUser);
    navigate(URL.home);
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
