// The <Outlet> component depends on this routers.

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main></Main>,
            children: [
                {
                    path: "/",
                    element: <Home></Home>,
                },
                {
                    path: "/about",
                    element: <About></About>,
                }
            ]
        },
        {
            // 404 route
            path: "*",
            element: "This route not found"
        }
    ]);

    return (
        <RouterProvider router={router} />
    );
}
