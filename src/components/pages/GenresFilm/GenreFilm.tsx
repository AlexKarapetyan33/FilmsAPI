import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { getGenresFilmThunk } from "../../../store/slices/filmsSlice"
import { useParams } from "react-router-dom"


export const GenreFilm = () => {

    const {getGenresFilmResult} =  useAppSelector((state) => state.filmsData)
    const {id} = useParams()
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getGenresFilmThunk(id))
    }, [id])
console.log(getGenresFilmResult);

  return (
    <div>
        {
            getGenresFilmResult?.map((getGenreResult : any) => {
                return (
                    <h3>{getGenreResult.title}</h3>
                )
            })
        }
    </div>
  )
}
