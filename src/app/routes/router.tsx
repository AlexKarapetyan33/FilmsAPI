import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../../components/templates/Layout/Layout";
import { Home } from "../../components/pages/Home/Home";
import { OneFilm } from "../../components/pages/OneFilm/OneFilm";

export const router = createBrowserRouter([
    {
        path : "/",
        element : <Layout />,
        children : [
            {
                index : true,
                element : <Home/>
            },
            {
                path : "/:id",
                element : <OneFilm />
            }
        ]
    }
])