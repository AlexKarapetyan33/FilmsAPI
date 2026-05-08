import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { getFilmsThunk } from "../../../store/slices/filmsSlice"
import { NavLink } from "react-router-dom"
import "./Home.css"


const imgUrl : string = "https://image.tmdb.org/t/p/w500/"

export const Home = () => {

  const {results} = useAppSelector((state) => state.filmsData)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getFilmsThunk())
  }, [])

  return (
    <div className="homePage">
      {
        results?.map((result) => {
          return (
            <NavLink to={`/${result.id}`} className={"navlink"}>
              <div className="filmCard">
              <img src={imgUrl + result.poster_path} alt="" />
              <p>Release Date {result.release_date}</p>
              <h3>{result.title}</h3>
            </div>
            </NavLink>
          )
        })
      }
    </div>
  )
}
