import { atom } from 'jotai';

type TitleAtom = {
  title?: string;
  back?: boolean;
};

export const titleAtom = atom<TitleAtom>({});

type BottomBtnAtom = {
  text?: string;
  add?: boolean;
  disable?: boolean;
};
export const bottomBtnAtom = atom<BottomBtnAtom>({});

export const activeSaveAtom = atom<boolean>(false);

type PreviewMoodAtom = {
  open?: boolean;
  value?: string;
};
export const previewMoodAtom = atom<PreviewMoodAtom>({});
