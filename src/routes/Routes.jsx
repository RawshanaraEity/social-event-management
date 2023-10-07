
import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/homePage/Home";
import About from "../pages/About";
import Gallery from "../pages/Gallery";
import Login from "../pages/Login";
import Services from "../pages/Services";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('/data.json')
        },
        {
            path: '/about',
            element: <About></About>
        },
        {
            path: '/services',
            element: <Services></Services>
        },
        {
            path: '/gallery',
            element: <Gallery></Gallery>
        },
        {
            path: '/login',
            element: <Login></Login>
        }
      ]
    }
  ]);
  export default router;