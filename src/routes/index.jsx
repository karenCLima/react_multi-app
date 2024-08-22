import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import ProtectedRoute  from "./ProtectedRoute";
import App from "../App";
import IPAddressFinder from "../pages/IPAddressFinder";
import LanguageTranslator from "../pages/LanguageTranslator";
import MovieSearchEngine from "../pages/MovieSearchEngine";
import QRCodeGenerator from "../pages/QRCodeGenarator";
import QuizApp from "../pages/QuizApp";
import TodoApp from "../pages/TodoApp";
import SignUp from "../pages/SignUp";
import Login from '../pages/Login'
import Home from '../pages/Home'

const Routes = ()=>{
    const { token } = useAuth();

    const routesForPublic = [
        {
            path:'/signup',
            element: <SignUp/>
        },
        {
            path:'/login',
            element: <Login/>
        }
    ];

    const routesForNotAuthenticatedOnly = [
        {
            path:'/signup',
            element: <SignUp/>
        },
        {
            path:'/login',
            element: <Login/>
        }
    ];

    const routesForAuthenticatedOnly = [
        {
            path: '/',
            element:<ProtectedRoute/>,
            children:[
                {
                    path:'/home',
                    element:<Home/>
                },
                {
                    path:'/ipAddress',
                    element:<IPAddressFinder/>
                },
                {
                    path:'/translator',
                    element:<LanguageTranslator/>
                },
                {
                    path:'/movie',
                    element:<MovieSearchEngine/>
                },
                {
                    path:'/qrcode',
                    element:<QRCodeGenerator/>
                },
                {
                    path:'/quiz',
                    element:<QuizApp/>
                },
                {
                    path:'/todo',
                    element:<TodoApp/>
                }
                
            ]
        }
    ]

    const router = createBrowserRouter([
        ...routesForPublic,
        ...(!token ? routesForPublic : []),
        ...routesForAuthenticatedOnly,
    ]);

    return <RouterProvider router={router} />;
    
};

export default Routes



