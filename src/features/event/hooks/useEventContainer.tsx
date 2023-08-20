import { useAtom } from 'jotai';
import { useLayoutEffect, useState } from 'react';

import { titleAtom } from '../../shared/layout/atom';
import { modalAtom } from '../../shared/modal/atom';
import { userAtom } from '../../login/atom';

const useEventContainer = () => {
  const [open, setOpen] = useState(false);
  const [, setTitle] = useAtom(titleAtom);
  const [, setModal] = useAtom(modalAtom);
  const [user] = useAtom(userAtom);

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
      setModal(user.special ? win : next);
    }, 500);
  };

  return {
    open,
    handleImageClick,
  };
};

export default useEventContainer;
