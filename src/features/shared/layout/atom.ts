import { atom } from 'jotai';

type TitleAtom = {
  title?: string;
  back?: boolean;
};

export const titleAtom = atom<TitleAtom>({});
