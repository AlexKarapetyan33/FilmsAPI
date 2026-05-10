import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { getGenresThunk } from "../../../store/slices/genresSlice"
import { NavLink } from "react-router-dom"
import { setLang } from "../../../store/slices/LangChangeSlice"
import "./Nav.css"



export const Nav = () => {
 const dispatch = useAppDispatch()
  const { genres } = useAppSelector((state) => state.genresData)

  useEffect(() => {
    dispatch(getGenresThunk())
  }, [])

  

  return (
    <nav className="navBar">
      <button onClick={() => dispatch(setLang("en-US"))}>EN</button>
      <button onClick={() => dispatch(setLang("ru-RU"))}>RU</button>
        {
          genres?.map((genre) => (
            <NavLink to={`/genre/${genre.id}`} key={genre.id}><button>{genre.name}</button></NavLink>
          ))
        }
    </nav>
  )
}