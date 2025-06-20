import { useEffect, useState } from "react"
import { getMeQuery } from "../api/user"
import { useUserStore } from "../model/userStore"
import { IUser } from "../type/user-api"
import { AxiosResponse } from "axios"


export const useGetUser = () => {
  const [trigger, setTrigger] = useState<number>(0)
  const [error, setError] = useState<string>()
  const { addUser } = useUserStore()
  useEffect(() => {
    (async () => {
      try {
        const res: AxiosResponse<IUser> = await getMeQuery();
        if (res.data) addUser(res.data)
      } catch (e) {
        setError("err")
      }
    })()
  }, [trigger])

  return { setTrigger, error }
}
