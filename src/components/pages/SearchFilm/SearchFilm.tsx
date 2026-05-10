import { NavLink, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { useEffect } from "react";
import { getOneFilmThunk } from "../../../store/slices/filmsSlice";
import "./SearchFilmCard.css"


const imgUrl : string = "https://image.tmdb.org/t/p/w500/"


export const SearchFilm = () => {

  const {id} = useParams()
  const dispatch = useAppDispatch()
  const {searchResults} = useAppSelector((state) => state.filmsData)

  useEffect(() => {
    dispatch(getOneFilmThunk(id))
  }, [])
  
  return (
    <div className="searchFilmContainer">
      {
        searchResults?.map((searchResult) => {
          return (
              <div className="searchFilmCard" key={searchResult.id}>
                <h1>{searchResult.title}</h1>
                <NavLink to={`/${searchResult.id}`}><img src={imgUrl + searchResult.poster_path} alt="" /></NavLink>
              </div>
          )
        })
      }
    </div>
  )
}
