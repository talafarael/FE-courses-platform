
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
  redactor: (id: string, entriesId: string, sectionId?: string) => `/main/course/${id}/${entriesId}/redactor/${sectionId ?? ""}`,
  watchLectureSection: (id: string, entriesId: string, sectionId?: string) => `/main/course/${id}/${entriesId}/watch/lecture/${sectionId ?? ""}`,

}
