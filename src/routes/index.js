import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import Profile from "../pages/Profile.jsx";
import NotFound from "../pages/Notfound.jsx";
import Homepage from "../pages/Homepage.jsx";   
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        paths: "/",
        element: Homepage
    },
    {
        path: "/account/register",
        element: Register
    },
    {
        path: "/account/login",
        element: Login
    },
    {
        path: "/profile",
        element: Profile,
    },
    {
        path: "*",
        element: NotFound
    }
])

export default router;