import {atom} from 'recoil';

export const searchDetailIndex = atom<number>({
  key: 'searchDetailIndex',
  default: -1,
});
