import { IUserCard } from 'share/types';

export type FormProps = { heading: string; noCreatedUserMessage: string };

export interface FormState {
  userCards: IUserCard[];
}
