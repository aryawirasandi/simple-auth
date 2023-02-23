import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound />,
        children: [
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