export interface SwitcherProps {
  switcherType: string;
  optionOne: string;
  optionTwo: string;
  switcherRef: React.RefObject<HTMLInputElement> | undefined;
  idRadioOne: string;
  idRadioTwo: string;
}
