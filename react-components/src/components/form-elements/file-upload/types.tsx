export interface FileUploadProps {
  labelType: string;
  fileUploadRef: React.RefObject<HTMLInputElement> | undefined;
  required: boolean;
  id: string;
}
