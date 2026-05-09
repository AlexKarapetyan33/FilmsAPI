import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { getSearchFilmThunk } from "../../../store/slices/filmsSlice"
import { NavLink } from "react-router-dom"
import "./searchInput.css"

export const SearchInput = () => {

    const dispatch = useAppDispatch()
    const [text, setText] = useState("")
    const [search, setSearch] = useState("")

    const handleSearch = () => {
        setSearch(text)
    }

    useEffect(() => {
        dispatch(getSearchFilmThunk(text))
    }, [search])
    
    

  return (
    <div className="searchBar">
    <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Search Film"/>
    <NavLink to={"/searchedFilms"}><button onClick={handleSearch}>Search</button></NavLink>
    </div>
  )
}
