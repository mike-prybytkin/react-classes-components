export interface TextInputProps {
  placeholderText: string;
  labelType: string;
  minTextLength: string;
  maxTextLength: string;
  required: boolean;
  inputTextRef: React.RefObject<HTMLInputElement> | undefined;
  id: string;
}
