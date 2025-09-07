import { useState } from "react"
import { uploadImage } from "../api/upload-image"
import { handlerError } from "@/src/shared/lib/error/error-handler"

export const useUploadImages = () => {
  const [image, setImage] = useState<string>()
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const handlerChangeImage = async (bufferImages: Buffer) => {
    try {
      setError(null)
      setLoading(true)
      const res = await uploadImage(bufferImages)
      setImage(res)
    } catch (e) {
      setError(handlerError(e))
    } finally {
      setLoading(false)
    }
  }
  return { handlerChangeImage, image, error, loading }
}
