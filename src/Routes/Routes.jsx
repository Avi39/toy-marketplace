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
import CategoryDetails from "../Pages/home/Shop-by-category/CategoryDetails";
import Error from "../Pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'alltoys',
        element: <Alltoys></Alltoys>
      },
      {
        path: 'addtoy',
        element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'detailstoys/:id',
        element: <PrivateRoute><DetailsToys></DetailsToys></PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-eleven-server-lyart.vercel.app/toyss/${params.id}`)
      },
      {
        path: 'mytoys',
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path: 'my_toys_update/:id',
        element: <MyToysUpdate></MyToysUpdate>,
        loader: ({ params }) => fetch(`https://assignment-eleven-server-lyart.vercel.app/toyss/${params.id}`)
      },
      {
        path: 'detailsCategory/:id',
        element: <PrivateRoute><CategoryDetails></CategoryDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-eleven-server-lyart.vercel.app/toyss/${params.id}`)
      }
    ]
  },
]);

export default router;