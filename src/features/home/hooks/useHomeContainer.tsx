import { useAtom } from 'jotai';
import { useLayoutEffect } from 'react';

import { titleAtom } from '../../shared/layout/atom';

const useHomeContainer = () => {
  const [, setTitle] = useAtom(titleAtom);

  useLayoutEffect(() => {
    setTitle({ title: 'CardMe' });
  }, []);
};

export default useHomeContainer;
