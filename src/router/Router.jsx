import { createBrowserRouter } from "react-router";
import Rootlayout from "../Layouts/Rootlayout";
import DashboardLayout from "../Layouts/DashboardLayout";
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
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import PrivateRoute from "../pages/Private/PrivateRoute";
import Error404 from "../pages/Private/Error404";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import AdminRoute from "../pages/Private/AdminRoute";
import ManageUsers from "../pages/Dashboard/ManageUsers";

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
        path: "/event_details/:id",
        element: <EventDetails></EventDetails>,
        loader: ({ params }) =>
          fetch(`https://social-events-weld.vercel.app/events/${params.id}`),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <Error404 />,
    children: [
      {
        path: "statistics",
        element: <DashboardHome />,
      },
      {
        path: "create-event",
        element: <CreatEvents />,
      },
      {
        path: "manage-events",
        element: <ManageEvents />,
      },
      {
        path: "joined-events",
        element: <JoinedEvents />,
      },
      {
        path: "update-event/:id",
        element: <UpdateEvents />,
        loader: ({ params }) =>
          fetch(`https://social-events-weld.vercel.app/events/${params.id}`),
      },
      // Admin Routes
      {
        path: "all-users",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Error404></Error404>,
  },
]);
export default router;
