import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const ProtectedRoute = ()=>{
    const { token } = useAuth();

    //Checa se o usário está autenticado
    if(!token){
        //Se naõ está autenticado redireciona para a pagina de login
        return <Navigate to="/login"/>
    }

    //Se está autenticado, renderiza as rotas filhas
    return <Outlet/>
}

export default ProtectedRoute
