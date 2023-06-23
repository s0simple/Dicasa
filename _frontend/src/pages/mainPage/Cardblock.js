import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../../components/cards/Cards";
import { TbHeart } from "react-icons/tb";
import Searchform from "./Searchform";
import { IoLocationOutline } from "react-icons/io5";

function Cardblock() {
  const [fetchData, setfetchData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost:5000/listings")
        .then((fetch) => {
          setfetchData(() => fetch.data.response);
          console.log(fetch.data.response);
        })
        .catch((err) => console.log(err));
    };

    fetchData();
  }, []);

  const price = (item) => {
    let price = item.toLocaleString("ak-GH", {
      style: "currency",
      currency: "GHC",
    });
    return price;
  };

  return (
    <div>
      {/* <div className="shadow rounded-lg mb-10 p-4  ">
         <Header />

        <span className=" font-medium text-gray-500 text-sm">
          Start by adding new members to the list
        </span>

        <Searchform />
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        {fetchData.map((data) => {
          return (
            <div key={data._id}>
              <div className="propcard cursor-pointer">
                <div className="propcardwrapper bg-white shadow rounded">
                  <div className="propcardhead">
                    <div
                      class="bg-cover bg-bottom h-96 rounded-t  w-full"
                      style={{
                        backgroundImage: `url(${data.photo_main})`,
                      }}
                    ></div>
                  </div>
                  <div className="cardbodywrapper py-2 px-4">
                    <div className="propcardbody flex flex-col gap-1 ">
                      <div className="cardlocation text-sm">
                        <span className="flex gap-1 items-center text-gray-500">
                          <span>
                            {/* <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-6 h-6"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                              />
                            </svg> */}
                            {/* <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32px"
                              height="32px"
                              viewBox="0 0 24 24"
                              className="h-5 w-5"
                            >
                              <g>
                                <path d="M12,21.933a1.715,1.715,0,0,1-1.384-.691L5.555,14.5a7.894,7.894,0,1,1,12.885-.009L13.385,21.24A1.717,1.717,0,0,1,12,21.933ZM11.992,3.066A6.81,6.81,0,0,0,7.414,4.815a6.891,6.891,0,0,0-1.05,9.1l5.051,6.727a.725.725,0,0,0,.584.292h0a.732.732,0,0,0,.586-.292l5.044-6.734A6.874,6.874,0,0,0,12.81,3.113,7.277,7.277,0,0,0,11.992,3.066Z" />
                                <path d="M12,12.5A2.5,2.5,0,1,1,14.5,10,2.5,2.5,0,0,1,12,12.5Zm0-4A1.5,1.5,0,1,0,13.5,10,1.5,1.5,0,0,0,12,8.5Z" />
                              </g>
                            </svg> */}

                            <IoLocationOutline size={16} />
                          </span>{" "}
                          <p>
                            {data.city} {data.town} {data.region}
                          </p>
                        </span>
                      </div>
                      <div className="cardtitle font-semibold  text-gray-800 text-lg ">
                        {data.name}
                      </div>
                    </div>
                    {/* <hr className="my-2" /> */}
                    <div className="propcardfooter flex justify-between items-center mt-2">
                      <div className="realicons ">
                        <div className="flex space-x-8 ">
                          <span className="flex items-center font-medium gap-2  md:text-sm">
                            <div className="rounded-sm">
                              {" "}
                              <svg
                                className="w-5 h-5 font-light fill-current text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                              >
                                <path d="M480,226.15V80a48,48,0,0,0-48-48H80A48,48,0,0,0,32,80V226.15C13.74,231,0,246.89,0,266.67V472a8,8,0,0,0,8,8H24a8,8,0,0,0,8-8V416H480v56a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V266.67C512,246.89,498.26,231,480,226.15ZM64,192a32,32,0,0,1,32-32H208a32,32,0,0,1,32,32v32H64Zm384,32H272V192a32,32,0,0,1,32-32H416a32,32,0,0,1,32,32ZM80,64H432a16,16,0,0,1,16,16v56.9a63.27,63.27,0,0,0-32-8.9H304a63.9,63.9,0,0,0-48,21.71A63.9,63.9,0,0,0,208,128H96a63.27,63.27,0,0,0-32,8.9V80A16,16,0,0,1,80,64ZM32,384V266.67A10.69,10.69,0,0,1,42.67,256H469.33A10.69,10.69,0,0,1,480,266.67V384Z"></path>
                              </svg>
                            </div>

                            <p className="font-medium text-gray-500">
                              {data.beds}
                            </p>
                          </span>

                          <span className="flex items-center gap-2 font-medium md:text-sm">
                            <div className=" rounded-sm">
                              <svg
                                className="w-5 h-5 fill-current text-gray-500 "
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                              >
                                <path d="M504,256H64V61.25a29.26,29.26,0,0,1,49.94-20.69L139.18,65.8A71.49,71.49,0,0,0,128,104c0,20.3,8.8,38.21,22.34,51.26L138.58,167a8,8,0,0,0,0,11.31l11.31,11.32a8,8,0,0,0,11.32,0L285.66,65.21a8,8,0,0,0,0-11.32L274.34,42.58a8,8,0,0,0-11.31,0L251.26,54.34C238.21,40.8,220.3,32,200,32a71.44,71.44,0,0,0-38.2,11.18L136.56,18A61.24,61.24,0,0,0,32,61.25V256H8a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8H32v96c0,41.74,26.8,76.9,64,90.12V504a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V480H384v24a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V474.12c37.2-13.22,64-48.38,64-90.12V288h24a8,8,0,0,0,8-8V264A8,8,0,0,0,504,256ZM228.71,76.9,172.9,132.71A38.67,38.67,0,0,1,160,104a40,40,0,0,1,40-40A38.67,38.67,0,0,1,228.71,76.9ZM448,384a64.07,64.07,0,0,1-64,64H128a64.07,64.07,0,0,1-64-64V288H448Z"></path>
                              </svg>
                            </div>

                            <p className="text-gray-500">{data.bath}</p>
                          </span>
                        </div>
                      </div>
                      <div className="price font-semibold text-2xl">
                        {data.price}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cardblock;
