import { IUserCard } from 'share/types';
import { userPhoto } from './user-photo';

export const mockUserCards: IUserCard[] = [
  {
    name: 'Max',
    avatarPath: userPhoto.max,
    gender: 'Male',
    birthday: '12-08-1995',
    salary: 'less than 100$',
    mailing: true,
  },
  {
    name: 'Kate',
    avatarPath: userPhoto.kate,
    gender: 'Female',
    birthday: '01-12-2003',
    salary: '200$ - 299$',
    mailing: false,
  },
];
