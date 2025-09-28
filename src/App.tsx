import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Invitation from "./components/Invitation";
import Home from "./pages/Home";
import AddressPage from "./pages/Address";
import StoryPage from "./pages/Story";
import PhotosPage from "./pages/Photos";
import { RsvpPage } from "./pages/Rsvp/rsvp";
import Layout from "./components/Layout";

function Error() {
  return <h2>404</h2>;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
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
        path: "/rsvp",
        element: <RsvpPage />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
