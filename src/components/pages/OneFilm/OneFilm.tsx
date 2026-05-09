import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { getOneFilmThunk } from "../../../store/slices/filmsSlice"
import { useParams } from "react-router-dom"
import "./OneFilm.css"


const imgUrl : string = "https://image.tmdb.org/t/p/w500/"


export const OneFilm = () => {

    const {id} = useParams()
    const dispatch = useAppDispatch()
    const {result} = useAppSelector((state) => (state.filmsData))

    useEffect(() => {
        dispatch(getOneFilmThunk(id))
    }, [])
    
  return (
    <div className="oneFilmCard">
      <div className="cardInfoBlock1">
        <img src={imgUrl + result?.poster_path} alt="SomeThing Went Wrong" />
        <h3>{result?.title}</h3>
        <span><b>Origin Country : </b>{result?.origin_country}</span>
        <span><b>Original Language : </b>{result?.original_language}</span>
        <span><b>Original Title : </b>{result?.original_title}</span>
      </div>
      <div className="cardInfoBlock2">
        <p>{result?.overview}</p>
      </div>
    </div>
  )
}
