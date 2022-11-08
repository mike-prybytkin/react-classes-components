export interface DateInputProps {
  defaultValue: string;
  labelType: string;
  minDate: string;
  maxDate: string;
  inputDateRef: React.RefObject<HTMLInputElement> | undefined;
  id: string;
}
