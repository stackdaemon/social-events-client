import { use } from "react";
import { AuthContext } from "../Auth/AuthContext";
import { useNavigate } from "react-router";
import Loading from '../Private/Loading'

const PrivateRoute = ({ children }) => {
  const { user ,loading} = use(AuthContext);
  const navigate =useNavigate()

  // console.log(location)


  if(loading){
     return  <Loading></Loading>;
  }

  if (user ) {
    return children;
  }
  return navigate('/login')
};

export default PrivateRoute;