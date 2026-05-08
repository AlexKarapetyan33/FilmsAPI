import { router } from "./routes/router";
import { RouterProvider } from "react-router-dom";
import "./style.css"



export const App = () => {

return (
  <>
    <RouterProvider router={router}/>
  </>
)
  
}
