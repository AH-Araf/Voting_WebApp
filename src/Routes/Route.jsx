import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import NirbachoniElaka from "../Pages/NirbachoniElaka/NirbachoniElaka";
import RajnoitikDol from "../Pages/RajnoitikDol/RajnoitikDol";
import NirbachoniIstehar from "../Pages/NirbachoniIstehar/NirbachoniIstehar";
import NirbachoniSongbad from "../Pages/NirbachoniSongbad/NirbachoniSongbad";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home/Home";
import NirbachoniIsteharForm from "../Pages/NirbachoniIstehar/NirbachoniIsteharForm";
import Register from "../Pages/Login/Register";
import MainSingleNews from "../Pages/NirbachoniSongbad/MainSingleNews";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
          {
            path: "/",
            element: <Home></Home>,
          },
          {
            path: "/NirbachoniElaka",
            element: <NirbachoniElaka></NirbachoniElaka>,
          },
          {
            path: "/RajnoitikDol",
            element: <RajnoitikDol></RajnoitikDol>,
          },
          {
            path: "/NirbachoniIstehar",
            element: <NirbachoniIstehar></NirbachoniIstehar>,
          },
          {
            path: "/NirbachoniSongbad",
            element: <NirbachoniSongbad></NirbachoniSongbad>,
            loader: () => fetch('http://172.105.116.39:8000/api/news/public/news/'),
          },
          {
            path: "/MainSingleNews/:id",
            element: <MainSingleNews></MainSingleNews>,
            loader: async ({params})  => fetch(`http://172.105.116.39:8000/api/news/public/news/${params.id}`),
          },
          {
            path: "/Login",
            element: <Login></Login>,
          },
          {
            path: "/Register",
            element: <Register></Register>,
          },
          {
            path: "/NirbachoniIsteharForm",
            element: <NirbachoniIsteharForm></NirbachoniIsteharForm>,
          },
          
          
        ]
    }
])