export interface ICreateLectureSectionForm {
  task: string;
  text: string;
  rounded_image?: string;
  images?: {
    [key: string]: string;
  };
  files?: {
    [key: string]: string;
  };
}
