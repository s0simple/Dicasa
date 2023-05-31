import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    <div>
      <div className="bg-white shadow rounded-lg mb-10 p-4  ">
        <div className="photoarea">photo here</div>
        <div className="description">description</div>
        <div className="action">action</div>
      </div>
    </div>
  );
};

export default SinglePage;
