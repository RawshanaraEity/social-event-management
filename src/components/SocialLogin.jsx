
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const SocialLogin = () => {
    const {googleLogin} = useContext(AuthContext)


    const handleGoogleLogin = () =>{
        googleLogin()
        .then(result => console.log(result.user))
        .catch(error => console.log(error))
    }

    return (
        <div className="p-5">
            <button onClick={handleGoogleLogin} className="btn btn-neutral btn-sm">Google Login</button>
        </div>
    );
};

export default SocialLogin;