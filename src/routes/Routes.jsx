
import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/homePage/Home";
import About from "../pages/About";
import Gallery from "../pages/Gallery";
import Login from "../pages/Login";
import Services from "../pages/Services";
import ServiceDetails from "../components/ServiceDetails";
import Register from "../pages/Register";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Contact from "../components/Contact";



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
            element: <PrivateRoute>
                <Services></Services>
                </PrivateRoute>,
            loader: () => fetch('/data.json')
        },
        {
            path: '/service/:id',
            element: <PrivateRoute>
                <ServiceDetails></ServiceDetails>
                </PrivateRoute>,
            loader: () => fetch('/data.json')
        },
        {
            path: '/gallery',
            element: <PrivateRoute>
                <Gallery></Gallery>
            </PrivateRoute>
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