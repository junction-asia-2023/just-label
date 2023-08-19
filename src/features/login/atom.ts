import { atomWithReset } from 'jotai/utils';

import { User } from './type';

export const userAtom = atomWithReset<User>({});
