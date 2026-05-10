import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { getGenresThunk } from "../../../store/slices/genresSlice"
import "./Nav.css"
import { NavLink } from "react-router-dom"

export const Nav = () => {
 const dispatch = useAppDispatch()
  const { genres } = useAppSelector((state) => state.genresData)

  useEffect(() => {
    dispatch(getGenresThunk())
  }, [])

  return (
    <nav className="navBar">
        {
          genres?.map((genre) => (
            <NavLink to={`/genre/${genre.id}`} key={genre.id}><button>{genre.name}</button></NavLink>
          ))
        }
    </nav>
  )
}