"use client"
import { IEntriesLecture } from '@/src/entities/entries/model/entries';
import { ChanageEntries } from '@/src/features/entries/ui/change-entries';
import { ChangeLectureSection } from '@/src/features/lecture/ui/change-lecture-section';
import { CreateLectionSection } from '@/src/features/lecture/ui/create-lecture-section';
import { useParams } from 'next/navigation';

export interface LectureProps {
  entry: Partial<IEntriesLecture>;
  order: number
}
export const Lecture = ({ entry }: LectureProps) => {
  const params = useParams<{ "section-id": string }>();
  const sectionId = Array.isArray(params?.['section-id'])
    ? params['section-id'][0]
    : params?.['section-id'];

  const lectureSection = entry?.lecture?.sections?.find(
    (elem) => elem.id === sectionId
  );

  return (
    <div>
      {sectionId ? (
        <ChangeLectureSection sectionLecture={lectureSection} />
      ) : (
        <CreateLectionSection />
      )}
    </div>
  );
};
