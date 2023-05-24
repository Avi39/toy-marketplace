import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Alltoys from "../Pages/Alltoys/Alltoys";
import AddToy from "../Pages/AddeToy/AddToy";
import Blog from "../Pages/Blog/Blog";
import DetailsToys from "../Pages/DetailsToys/DetailsToys";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        },
        {
          path:'alltoys',
          element:<Alltoys></Alltoys>
        },
        {
          path:'addtoy',
          element:<AddToy></AddToy>
        },
        {
          path:'blog',
          element:<Blog></Blog>
        },
        {
          path:'detailstoys/:id',
          element:<DetailsToys></DetailsToys>,
          loader:({params})=>fetch(`http://localhost:5000/toyss/${params.id}`)
        }
      ]
    },
  ]);

  export default router;