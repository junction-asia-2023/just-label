import { atom } from 'jotai';

type TitleAtom = {
  title?: string;
  back?: boolean;
};

export const titleAtom = atom<TitleAtom>({});

type BottomBtnAtom = {
  text?: string;
  add?: boolean;
};
export const bottomBtnAtom = atom<BottomBtnAtom>({});
