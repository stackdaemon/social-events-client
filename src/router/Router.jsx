import { createBrowserRouter } from "react-router";
import Rootlayout from "../Layouts/Rootlayout";
import Home from "../pages/Home/Home";
import UpcommingEvents from "../pages/UpcommingEvents";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import CreatEvents from "../pages/ProfileLinks/CreatEvents";
import JoinedEvents from "./../pages/ProfileLinks/JoinedEvents";
import ManageEvents from "./../pages/ProfileLinks/ManageEvents";
import EventDetails from "../pages/EventDetails";
import UpdateEvents from "../pages/ProfileLinks/UpdateEvents";
import About from "../pages/About";
import Contect from "../pages/Contect";
import Blog from "../pages/Blog";
import PrivateRoute from "../pages/Private/PrivateRoute";
import Error404 from "../pages/Private/Error404";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    errorElement: <Error404></Error404>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/upcomming_events",
        element: <UpcommingEvents></UpcommingEvents>,
        loader: () => fetch("https://social-events-weld.vercel.app/events"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/creat_event",
        element: (
          <PrivateRoute>
            <CreatEvents></CreatEvents>
          </PrivateRoute>
        ),
      },
      {
        path: "/manage_event",
        element: (
          <PrivateRoute>
            {" "}
            <ManageEvents></ManageEvents>
          </PrivateRoute>
        ),
        loader: () => fetch("https://social-events-weld.vercel.app/events"),
      },
      {
        path: "/joined_event",
        element: (
          <PrivateRoute>
            <JoinedEvents></JoinedEvents>
          </PrivateRoute>
        ),
      },
      {
        path: "/event_details/:id",
        element: <EventDetails></EventDetails>,
        loader: ({ params }) =>
          fetch(`https://social-events-weld.vercel.app/events/${params.id}`),
      },
      {
        path: "/update/:id",
        element: <UpdateEvents></UpdateEvents>,
        //  loader: ({params}) => fetch(`https://social-events-weld.vercel.app/joined-event/${params.id}`)
        loader: ({ params }) =>
          fetch(`https://social-events-weld.vercel.app/events/${params.id}`),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contect",
        element: <Contect></Contect>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "*",
        element: <Error404></Error404>,
      },
    ],
  },
]);
export default router;
