import { useAtom } from 'jotai';
import { useLayoutEffect, useState } from 'react';

import { titleAtom } from '../../shared/layout/atom';
import { modalAtom } from '../../shared/modal/atom';

const useEventContainer = () => {
  const [open, setOpen] = useState(false);
  const [, setTitle] = useAtom(titleAtom);
  const [, setModal] = useAtom(modalAtom);

  useLayoutEffect(() => {
    setTitle({ back: true, title: 'Event' });
  }, []);

  const handleImageClick = () => {
    setOpen(true);
    setTimeout(() => {
      const common = {
        open: true,
      };
      const win = {
        ...common,
        footer: true,
        onConfirm: () => {},
        imageType: 'win',
        title: 'Congratulations!',
        description:
          'Congratulations on winning! Press the button to get a gift.',
      };
      const next = {
        ...common,
        imageType: 'next',
        title: 'Sorry...',
        description:
          'I missed the opportunity this time, but try to get the prize for the next event.',
      };
      setModal(Date.now() % 2 === 0 ? next : win);
    }, 500);
  };

  return {
    open,
    handleImageClick,
  };
};

export default useEventContainer;
