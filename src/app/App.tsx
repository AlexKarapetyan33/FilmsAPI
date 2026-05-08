import "./style.css"
import { Header } from "../components/organisms/Header/Header";
import { useEffect } from "react";
import { getFilmsThunk } from "../store/slices/filmsSlice";
import { useAppDispatch, useAppSelector } from "./hooks";
import { router } from "./routes/router";
import { RouterProvider } from "react-router-dom";


export const App = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getFilmsThunk())
  }, [])
return (
  <>
    <RouterProvider router={router}/>
  </>
)
  
}
