import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Alltoys from "../Pages/Alltoys/Alltoys";
import AddToy from "../Pages/AddeToy/AddToy";
import Blog from "../Pages/Blog/Blog";
import DetailsToys from "../Pages/DetailsToys/DetailsToys";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../Pages/MyToys/MyToys";
import MyToysUpdate from "../Pages/MyToys/MyToysUpdate";

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
          element:<PrivateRoute><AddToy></AddToy></PrivateRoute>
        },
        {
          path:'blog',
          element:<Blog></Blog>
        },
        {
          path:'detailstoys/:id',
          element:<PrivateRoute><DetailsToys></DetailsToys></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/toyss/${params.id}`)
        },
        {
          path:'mytoys',
          element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
          path:'my_toys_update',
          element:<MyToysUpdate></MyToysUpdate>
        }
      ]
    },
  ]);

  export default router;