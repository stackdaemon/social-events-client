import { use } from "react";
import { AuthContext } from "../Auth/AuthContext";
import { Navigate, useNavigate } from "react-router";
import Loading from '../Private/Loading'

const PrivateRoute = ({ children }) => {
  const { user ,loading} = use(AuthContext);
  const navigate =useNavigate()



  if(loading){
     return  <Loading></Loading>;
  }

  if (user ) {
    return children;
  }
  return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoute;