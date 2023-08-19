import { useAtom } from 'jotai';
import { useLayoutEffect } from 'react';

import { titleAtom } from '../../shared/layout/atom';

const useEventContainer = () => {
  const [, setTitle] = useAtom(titleAtom);

  useLayoutEffect(() => {
    setTitle({ back: true, title: 'Event' });
  }, []);
};

export default useEventContainer;
