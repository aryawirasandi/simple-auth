import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <NotFound/>
    }
    ,
    {
        path: "/account/register",
        element: <Register/>,
    },
    {
        path: "/account/login",
        element: <Login/>,
    },
    {
        path: "/profile",
        element: <Profile/>,
    },
])

export default router;