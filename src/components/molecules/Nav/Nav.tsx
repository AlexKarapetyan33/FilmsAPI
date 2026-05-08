import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { getGenresThunk } from "../../../store/slices/genresSlice"
import "./Nav.css"

export const Nav = () => {
 const dispatch = useAppDispatch()
  const { genres } = useAppSelector((state) => state.genresData)

  useEffect(() => {
    dispatch(getGenresThunk())
  }, [])

  return (
    <nav className="navBar">
        <select>
      {
        genres?.map((genre) => {
            return (
                <option key={genre.id}>{genre.name}</option>
            )
        })
      }
      </select>
    </nav>
  )
}