import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
import { Welcome } from "../../container";

const Register = () => {
  //const navigate = useNavigate();
  const [inputs, setinputs] = useState({ email: "", password: "" });
  const [showPass, setshowPass] = useState("password");
  // const [showtext, setshowtext] = useState("text");
  const [show, setshow] = useState(true);
  const [match, setMatch] = useState("");

  const [showModel, setShowModel] = useState(false);

  const user_url = "http://localhost:5000/users/";

  const handlechange = (e) => {
    //const { name, value } = e.target;
    const { name, value } = e.target;

    setinputs((prev) => ({
      ...prev,
      [name]: value,
    }));

    //setEmail((p) => ({ ...p, [name]: value }));

    console.log(inputs);
  };

  const successModal = () => {
    setShowModel(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password, confirmPass, user_name } = inputs;

    let isMatch = password === confirmPass;

    if (!isMatch) {
      console.log("password does not match ");
      setMatch(() => "oops! password mismatch");
    } else {
      const newacc = { email, password, user_name };

      console.log(newacc);

      await axios
        .post(user_url, newacc)
        .then((response) => console.log(response.data))
        .catch((err) => console.log(err));

      // const token = register.data.token;
      // const err = register.data;

      // if (token) {
      //   localStorage.setItem("item", JSON.stringify(token));
      //   navigate("/member");
      // } else {
      //   console.log(err);
      // }

      successModal();
    }
  };

  const showpass = () => {
    if (show) {
      setshowPass(() => "text");
      setshow(false);
    } else {
      setshowPass(() => "password");
      setshow(true);
    }
  };

  return (
    <>
      <div className="h-screen bg-gray-900 relative flex flex-col space-y-10 justify-center items-center">
        <h1 className="font-bold text-center text-4xl text-yellow-500">
          Dida<span className="text-blue-500"> CRUD</span>
        </h1>
        <div className="bg-white md:shadow-lg shadow-none rounded p-6 w-96">
          <h1 className="text-3xl font-bold leading-normal">Register</h1>
          <p className="text-sm leading-normal">
            Stay updated on your professional world
          </p>
          <form className="space-y-5 mt-5" onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-4 relative">
              <input
                id="email"
                className="w-full rounded px-3 border border-gray-500 pt-5 pb-2 focus:outline-none input active:outline-none"
                type="text"
                autoFocus=""
                name="user_name"
                value={inputs.user_name}
                onChange={handlechange}
              />
              <label
                htmlFor="email"
                className="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-500 text-base mt-2 cursor-text"
              >
                Username
              </label>
            </div>
            <div className="mb-4 relative">
              <input
                id="email"
                className="w-full rounded px-3 border border-gray-500 pt-5 pb-2 focus:outline-none input active:outline-none"
                type="text"
                autoFocus=""
                name="email"
                value={inputs.email}
                onChange={handlechange}
              />
              <label
                htmlFor="email"
                className="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-500 text-base mt-2 cursor-text"
              >
                Email
              </label>
            </div>

            <div className="relative flex items-center border border-gray-500 focus:ring focus:border-blue-500 rounded">
              <input
                id="password"
                className="w-full rounded px-3 pt-5 outline-none pb-2 focus:outline-none active:outline-none input active:border-blue-500"
                type={showPass}
                name="password"
                value={inputs.password}
                onChange={handlechange}
              />
              <label
                htmlFor="password"
                className="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-500 text-base mt-2 cursor-text"
              >
                Password
              </label>
              <span
                className="text-sm font-bold text-blue-700 hover:bg-blue-100 rounded-full px-2 py-1 mr-1 leading-normal cursor-pointer"
                onClick={showpass}
              >
                {show ? <p>show</p> : <p>hide</p>}
              </span>
            </div>
            <div className="relative  items-center border border-gray-500 focus:ring focus:border-blue-500 rounded">
              <input
                id="password"
                className="w-full rounded px-3 pt-5 outline-none pb-2 focus:outline-none active:outline-none input active:border-blue-500"
                type={showPass}
                name="confirmPass"
                value={inputs.confirmPass}
                onChange={handlechange}
              />

              <label
                htmlFor="password"
                className="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-500 text-base mt-2 cursor-text"
              >
                Confirm Password
              </label>
              <span
                className="text-sm font-bold text-blue-700 hover:bg-blue-100 rounded-full px-2 py-1 mr-1 leading-normal cursor-pointer"
                onClick={showpass}
              ></span>
            </div>
            <div className="-mt-8   text-red-500 text-sm  border-black">
              {match}
            </div>

            <div className="">
              <a
                className="font-bold text-blue-700  hover:underline  rounded-full"
                href="dee.com"
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full text-center bg-blue-700 hover:bg-blue-900 rounded-full text-white py-3 font-medium"
            >
              Register
            </button>
          </form>
        </div>
        <p className="notify_join">
          Already have an account? {"  "}
          <Link
            className="text-blue-700 font-bold hover:text-gray-100 hover:underline "
            to={"/"}
          >
            Login
          </Link>
        </p>
      </div>

      <Welcome isVisible={showModel} onClose={() => setShowModel(false)} />
    </>
  );
};

export default Register;
