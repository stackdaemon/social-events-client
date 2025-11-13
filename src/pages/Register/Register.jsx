import { use } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthContext";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser,updateUserProfile } = use(AuthContext);
  const navigate=useNavigate()

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const displayName = form.name.value;
    const email = form.email.value;
    const photoURL = form.photo.value;
    const password = form.password.value;
    // console.log({ name, email, photoURL, password });
 if (!passwordRegex.test(password)) {
    
      toast.error(
        "Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
      );
      return;
    }



    createUser(email, password)
    .then((res) => {
      Swal.fire({
        title: "Sign Up Successful!",
        icon: "success",
        draggable: true,
      })
      updateUserProfile(displayName,photoURL)
        navigate ('/')
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Error!",
          text: err.message,
          icon: "error",
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <form
        onSubmit={handleRegister}
        className="bg-white dark:bg-[#1e2838] border border-gray-200 dark:border-gray-700 p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-green-600">
          Register
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full p-3 mb-3 border rounded-lg focus:outline-green-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-3 mb-3 border rounded-lg focus:outline-green-500"
          required
        />
        <input
          type="text"
          name="photo"
          placeholder="Photo URL"
          className="w-full p-3 mb-3 border rounded-lg focus:outline-green-500"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-3 mb-3 border rounded-lg focus:outline-green-500"
          required
        />

        <button
         
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition"
        >
          Register
        </button>

        <p className="text-center mt-4 text-gray-700">
          Already have an account?{" "}
          <Link to="/login" className="text-green-600 font-semibold">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
