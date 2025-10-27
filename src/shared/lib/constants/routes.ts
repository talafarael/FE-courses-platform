export enum ROUTE {
  register = "/auth/register",
  login = "/auth/login",
  home = "/main",
  profile = "/main/profile",
  specialty = "/main/specialty",
  createCourse = "/course/create-course",
  course = "/main/course",
  test = "",
  redactor = "/redactor",
}
export const ROUTES = {
  register: "/auth/register",
  login: "/auth/login",
  home: "/main",
  profile: "/main/profile",
  specialty: "/main/specialty",
  createCourse: "/course/create-course",
  course: "/main/course",
  test: "",
  redactor: (id: string, entriesId: string, sectionId?: string) =>
    `/main/admin-course/${id}/${entriesId}/redactor/${sectionId ?? ""}`,
  watchAdminLectureSection: (
    id: string,
    entriesId: string,
    sectionId?: string,
  ) =>
    `/main/admin-course/${id}/${entriesId}/admin-watch/section/${sectionId ?? ""}`,

  watchLectureSection: (id: string, entriesId: string, sectionId?: string) =>
    `/main/admin-course/${id}/${entriesId}/watch/section/${sectionId ?? ""}`,
  changeLectureSection: (id: string, entriesId: string, sectionId: string) =>
    `/main/admin-course/${id}/${entriesId}/redactor/${sectionId}/change`,
};
