
import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/homePage/Home";
import About from "../pages/About";
import Gallery from "../pages/Gallery";
import Login from "../pages/Login";
import Services from "../pages/Services";
import ServiceDetails from "../components/ServiceDetails";
import Contact from "../components/Contact";
import Register from "../pages/Register";



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
            element: <Services></Services>,
            loader: () => fetch('/data.json')
        },
        {
            path: '/service/:id',
            element: <ServiceDetails></ServiceDetails>,
            loader: () => fetch('/data.json')
        },
        {
            path: '/gallery',
            element: <Gallery></Gallery>
        },
        {
            path: '/contact',
            element: <Contact></Contact>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        }
      ]
    }
  ]);
  export default router;