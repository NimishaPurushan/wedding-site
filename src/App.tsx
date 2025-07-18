import { RouterProvider, createBrowserRouter } from "react-router-dom";
import  Invitation  from "./components/Invitation";
import {useState} from "react";
import Home from "./pages/Home";
import AddressPage from "./pages/Address";
import { StoryPage } from "./pages/Story/storyPage";
import { PhotosPage } from "./pages/Photos/photosPage";


function About() {
    return <h2>About</h2>;
}

function Error() {
    return <h2>404</h2>;
}


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/invitation",
        element: <Invitation />,
    },
    {
        path: "/story",
        element: <StoryPage />,
    },
    {
        path: "/address",
        element: <AddressPage />,
    },
    {
        path: "/photos",
        element: <PhotosPage />,
    },
    {
        path: "*",
        element: <Error />,
    },
]);
const App = () => {

    return (
      <RouterProvider router={router} />
    );
};

export default App;
