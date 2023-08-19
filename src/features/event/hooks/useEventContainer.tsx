import { useAtom } from 'jotai';
import { useLayoutEffect, useState } from 'react';

import { titleAtom } from '../../shared/layout/atom';

const useEventContainer = () => {
  const [open, setOpen] = useState(false);
  const [, setTitle] = useAtom(titleAtom);

  useLayoutEffect(() => {
    setTitle({ back: true, title: 'Event' });
  }, []);

  const handleImageClick = () => {
    setOpen(true);
  };

  return {
    open,
    handleImageClick,
  };
};

export default useEventContainer;
