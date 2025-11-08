import { createBrowserRouter } from "react-router";
import Rootlayout from "../Layouts/Rootlayout";
import Home from "../pages/Home/Home";
import UpcommingEvents from "../pages/UpcommingEvents";

const router =createBrowserRouter([
     {
          path:'/',
          Component:Rootlayout,
          children:[
               {
                    index:true,
                    element:<Home></Home>
               },
               {
                    path:'/upcomming_events',
                    element:<UpcommingEvents></UpcommingEvents>
               }
          ]
     }
])
export default  router;