import { createBrowserRouter } from "react-router";
import Rootlayout from "../Layouts/Rootlayout";
import Home from "../pages/Home/Home";

const router =createBrowserRouter([
     {
          path:'/',
          Component:Rootlayout,
          children:[
               {
                    index:true,
                    element:<Home></Home>
               }
          ]
     }
])
export default  router;