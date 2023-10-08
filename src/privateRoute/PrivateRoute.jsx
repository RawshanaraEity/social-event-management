import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({children}) => {

    const {user, loading} = useAuth();
    const location = useLocation()
    console.log(location)

    if(loading){
        return <span className="loading loading-infinity loading-lg"></span>
    }

    if(!user){
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }

    return children;
};

export default PrivateRoute;