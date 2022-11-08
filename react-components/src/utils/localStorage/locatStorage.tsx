import { IUserCard } from 'share/types';
import { StorageKey } from './types';

const getItemLocalSrorage = (key: StorageKey) => {
  const storageString: string = localStorage.getItem(key) ?? '';
  return storageString ? JSON.parse(storageString) : null;
};

const setItemLocalSrorage = (key: StorageKey, card: IUserCard) => {
  const data = getItemLocalSrorage(key);
  if (data) {
    data.push(card);
    localStorage.setItem(key, JSON.stringify(data));
  } else {
    localStorage.setItem(key, JSON.stringify([card]));
  }
};

export { getItemLocalSrorage, setItemLocalSrorage };
