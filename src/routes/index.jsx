import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        element: <Main/>,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Homepage/>
            },
            {
                path: "/auth/register",
                element: <Register />,
            },
            {
                path: "/auth/login",
                element: <Login />,
            },
            {
                path: "/profile",
                element: <Profile />,
            },
        ]
    }
])

export default router;