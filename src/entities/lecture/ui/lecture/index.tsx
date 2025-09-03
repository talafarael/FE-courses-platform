import { LectureSection } from '@/src/features/lecture/model/lecture-section.model';
import React from 'react'
import { FactoryLecture } from '../factory-lecture';
import { CreateLectionSection } from '@/src/features/lecture/ui/create-lecture-section';

export interface LectureProps {
  entry: Partial<LectureSection>;
  order: number
}
export const Lecture = ({ entry, order }: LectureProps) => {
  return (
    <div>
      <CreateLectionSection
        order={order}
      />
    </div>
  )
}
