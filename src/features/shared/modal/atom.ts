import { atomWithReset } from 'jotai/utils';

export type ImageType = 'win' | 'next' | 'preview';
export type Modal = {
  open: boolean;
  imageType: ImageType;
  onClose: () => void;
  title?: string;
  description?: string;
  footer?: boolean;
  onConfirm?: () => void;
};

export const modalAtom = atomWithReset<Modal | { open?: boolean }>({});
