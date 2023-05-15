import axios from "axios";
import React, { useState } from "react";
import "./auth.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [inputs, setinputs] = useState({ email: "", password: "" });

  const user_url = "http://localhost:5000/users/";

  const handlechange = (e) => {
    const { name, value } = e.target;

    setinputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const signin = await axios.post(user_url + "login", inputs);
    //   .then((response) => console.log(response.data))
    //   .catch((err) => console.log(err));

    const token = signin.data.token;
    const username = signin.data.user_name;
    const err = signin.data;

    const allsignin = { token, username };

    // console.log(username);

    if (token) {
      localStorage.setItem("item", JSON.stringify(allsignin));
      navigate("/dashboard/mainpage");
    } else {
      console.log(err);
    }
  };

  return (
    <>
      <div className="h-screen bg-gray-900 relative flex flex-col space-y-10 justify-center items-center">
        <h1 className="font-bold text-center text-4xl text-yellow-500">
          Dida<span className="text-blue-500"> CRUD</span>
        </h1>
        <div className="bg-white md:shadow-lg shadow-none rounded p-6 w-96">
          <h1 className="text-3xl font-bold leading-normal">Sign in</h1>
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
                type="password"
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
              <a
                className="text-sm font-bold text-blue-700 hover:bg-blue-100 rounded-full px-2 py-1 mr-1 leading-normal cursor-pointer"
                href="dee.com"
              >
                show
              </a>
            </div>
            <div className="">
              <a
                className="font-bold text-blue-700 hover:underline rounded-full"
                href="dee.com"
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full text-center bg-blue-700 hover:bg-blue-900 rounded-full text-white py-3 font-medium"
            >
              Sign in
            </button>
          </form>
        </div>
        <p className="notify_join">
          Don't have an account?{" "}
          <Link
            className="text-blue-700 font-bold hover:text-gray-100 hover:underline "
            to={"/register"}
          >
            Create one
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
