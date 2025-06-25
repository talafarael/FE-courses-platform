export interface IUser {
  id: string;
  has_admin_rights: boolean;
  has_access_to_courses: string[];
  card: {
    full_name: string;
    nickname: string;
    profile_pic: string;
  };
  email: string;
  badges: {
    id: string;
    name: string;
    description: string;
  }[];
  contact_info: {
    telegram: string;
    instagram: string;
  };
}
