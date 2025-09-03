

export interface LectureSection {
  lecture_id: string;
  task: string;
  text: string;
  rounded_image: string;
  images: Record<string, string>;
  files: Record<string, string>;
  id: string;
}

