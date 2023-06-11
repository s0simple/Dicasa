import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Gallery from "../../elements/Gallary";
// import Slider1 from "../../elements/Slider1";
import SingleRight from "./SingleRight";

const SinglePage = () => {
  const [fetchData, setfetchData] = useState([]);
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("item"));

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token.token}`,
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await axios
  //       .get("http://localhost:5000/listings")
  //       .then((fetch) => {
  //         setfetchData(() => fetch.data.response);
  //         console.log(fetch.data.response);
  //         setIsLoading(false);
  //       })
  //       .catch(() => navigate("/"));
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="flex gap-5">
      <div className=" w-4/6 shadow rounded-lg mb-10 p-4 bg-white">
        <div className=" photoarea ">
          <div className="w-full h-full ">
            <Gallery />
          </div>
        </div>
        <div className="slider">{/* <Slider1 /> */}</div>
        <div className="description">description</div>
        <div className="action">action</div>
      </div>
      <div className="w-2/6 shadow rounded-lg mb-10 p-4 bg-white">
        <SingleRight />
      </div>
    </div>
  );
};

export default SinglePage;
