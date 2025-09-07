import { useCallback, useState } from "react"
import { handlerError } from "../lib/error/error-handler"

export const useApi = () => {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const handlerSubmit = useCallback(async<T>(fn: () => Promise<T>) => {
    try {
      setError(null)
      setLoading(true)
      const data = await fn()
      return { data, error: null }
    } catch (e) {
      const message = handlerError(e)
      setError(message)
      return { data: null, error: message }
    } finally {
      setLoading(false)
    }
  }, [])

  return { handlerSubmit, error, loading }
}
