import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { userAtom } from '../../../login/atom';
import { getItem } from '../../utils/storage';
import { URL } from '../../constants/url';

const useLayout = () => {
  const [, setUser] = useAtom(userAtom);
  const navigate = useNavigate();

  useEffect(() => {
    const user = getItem('user');
    if (!user) {
      navigate(URL.login);
      return;
    }
    setUser({ ...user });
  }, []);
};

export default useLayout;
