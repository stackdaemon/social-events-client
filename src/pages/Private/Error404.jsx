import { Link } from 'react-router';
import image from '../../assets/error-404.png'

const Error404 = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={image} alt="" />
      <Link to={'/'}>
        <button className="btn btn-secondary mt-10">Go to Home Page</button>
      </Link>
    </div>
  );
};

export default Error404;