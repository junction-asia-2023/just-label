import { useAtom } from 'jotai';
import { useLayoutEffect } from 'react';

import { userAtom } from '../../../login/atom';
import { getItem } from '../../utils/storage';

const useLayout = () => {
  const [user] = useAtom(userAtom);

  useLayoutEffect(() => {
    const user = getItem('user');
    if (!user) {
      // TODO: Redirect Login
    }
  }, []);
};

export default useLayout;
