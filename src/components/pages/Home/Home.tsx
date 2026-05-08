import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { getFilmsThunk } from "../../../store/slices/filmsSlice"


export const Home = () => {

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getFilmsThunk())
  }, [])

  return (
    <div>Home</div>
  )
}
