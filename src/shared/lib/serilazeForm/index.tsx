export const serializeForm = <T extends Record<string, string>>(
  data: T,
): FormData => {
  const form = new FormData();
  Object.keys(data).forEach((key) => {
    const value = data[key as keyof T];
    if (value !== undefined && value !== null) {
      form.append(key, String(value));
    }
  });
  return form;
};
export interface ImgFormProps {
  img?: File;
  form: FormData;
}
export const imgForm = ({ img, form }: ImgFormProps): FormData => {
  if (img) {
    form.append("picture", img);
  }
  return form;
};
