// This is Router Page

import {
    createBrowserRouter,
} from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
    },
]);


// --> App.js file

import { router } from './Router/Router';

function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}