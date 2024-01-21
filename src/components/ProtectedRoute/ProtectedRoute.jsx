import {useUser} from "../../api/useUser.js";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

function ProtectedRoute({children}){
    const navigate = useNavigate();

    const {isLoading, isAuthenticated} = useUser();
    useEffect(function (){
        if(!isAuthenticated && !isLoading) navigate("/login");
    }, [isAuthenticated, isLoading, navigate]);

    if(isLoading) console.log(isLoading)

    if(isAuthenticated) return children;
}
export default ProtectedRoute;