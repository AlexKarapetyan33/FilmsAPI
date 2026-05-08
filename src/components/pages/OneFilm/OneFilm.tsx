import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { getOneFilmThunk } from "../../../store/slices/filmsSlice"
import { useParams } from "react-router-dom"

const imgUrl : string = "https://image.tmdb.org/t/p/w500/"


export const OneFilm = () => {

    const {id} = useParams()
    const dispatch = useAppDispatch()
    const {result} = useAppSelector((state) => (state.filmsData))

    useEffect(() => {
        dispatch(getOneFilmThunk(id))
    }, [])
    
  return (
    <div>
      <img src={imgUrl + result?.poster_path} alt="dfg" />
        <h2>{result?.title}</h2>
    </div>
  )
}
