import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { useLoadImgLectureSection } from '../../hook/use-load-img-lecture-section'

export interface LoadImageLectureProps {
  img: { [key: string]: string }
}

export const LoadImageLecture = ({ img }: LoadImageLectureProps) => {
  const ref = useRef<HTMLInputElement | null>(null)
  const [image, setImage] = useState<File | null>(null)

  const handleSetImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setImage(selectedFile)
    }
  }

  const { } = useLoadImgLectureSection()
  const targgetInput = () => {
    ref.current?.click();
  }
  return (
    <div>
      {
        Object.entries(img).map(([key, url], index) => (
          <Image
            key={`${key}-${index}`}
            src={url}
            alt={key}
            className="w-32 h-32 object-cover rounded"
          />
        ))
      }
      < div className='w-[100px] h-[100px]'>
        <input
          onChange={handleSetImage}
          type='file' ref={ref} className="hidden w-[0px] h-[0px]" />

        {image ? (
          <Image
            onClick={targgetInput}
            src={URL.createObjectURL(image)}
            alt="preview"
            width={100}
            height={100}
            className="rounded-[50%] object-cover bg-white cursor-pointer"
          />
        ) : (
          <div
            onClick={targgetInput}
            className="w-[100px] h-[100px] rounded-[50%] bg-white cursor-pointer flex items-center justify-center text-gray-500"
          >
            +
          </div>
        )}

      </div>

    </div >
  )
}
