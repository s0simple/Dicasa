import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../../components/cards/Cards";
import { TbHeart } from "react-icons/tb";
import Searchform from "./Searchform";

function Cardlist() {
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
      <div className="flex flex-col gap-y-8 ">
        {fetchData.map((data) => {
          return (
            <div key={data._id}>
              <div className="">
                <div class=" ">
                  <div class="relative w-full transition duration-500">
                    <div class=" shadow bg-white flex rounded-lg overflow-hidden  hover:shadow-xl transition duration-500 ">
                      {/* card photo */}

                      <div className=" w-2/5">
                        <div className="relative flex ">
                          <div
                            class="bg-cover bg-bottom h-80 md:h-64  w-full"
                            style={{
                              backgroundImage: `url(${data.photo_main})`,
                            }}
                          ></div>

                          {/* top corner on photo */}
                          <div class="absolute top-0 right-0 p-2 z-20 flex justify-between">
                            {/* <div class="inline-flex items-center justify-center w-8 h-8 p-2 rounded-full bg-white shadow-sm">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-8 h-8 h-auto fill-current text-red-500"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </div> */}
                            <span class="py-1 px-2.5 border-none rounded bg-gray-200 text-sm text-gray-800 font-medium">
                              {data.offer}
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* card body */}
                      <div className=" w-3/5">
                        {/* top right corner on card */}
                        <div class="absolute top-0 right-0  mr-2 p-2 z-20 flex justify-between">
                          <div class="inline-flex items-center hover:bg-gray-300 justify-center w-8 h-8 p-2 rounded-full bg-gray-200 shadow-sm">
                            {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-8 h-8 h-auto fill-current text-red-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                              clip-rule="evenodd"
                            />
                          </svg> */}
                            <TbHeart />
                          </div>
                        </div>
                        {/* card description */}
                        <div>
                          <div class="p-3 md:py-4 md:px-5">
                            <p class="font-bold md:text-lg">{data.name}</p>
                            <p class="text-gray-700 md:text-sm ">
                              {data.region}, {data.city}, {data.landmarks}
                            </p>
                            <div className="flex  pt-4 space-x-8 ">
                              <p className="flex items-center font-medium text-gray-800 md:text-sm">
                                <svg
                                  className="w-5 h-5 fill-current mr-2"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path d="M480,226.15V80a48,48,0,0,0-48-48H80A48,48,0,0,0,32,80V226.15C13.74,231,0,246.89,0,266.67V472a8,8,0,0,0,8,8H24a8,8,0,0,0,8-8V416H480v56a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V266.67C512,246.89,498.26,231,480,226.15ZM64,192a32,32,0,0,1,32-32H208a32,32,0,0,1,32,32v32H64Zm384,32H272V192a32,32,0,0,1,32-32H416a32,32,0,0,1,32,32ZM80,64H432a16,16,0,0,1,16,16v56.9a63.27,63.27,0,0,0-32-8.9H304a63.9,63.9,0,0,0-48,21.71A63.9,63.9,0,0,0,208,128H96a63.27,63.27,0,0,0-32,8.9V80A16,16,0,0,1,80,64ZM32,384V266.67A10.69,10.69,0,0,1,42.67,256H469.33A10.69,10.69,0,0,1,480,266.67V384Z"></path>
                                </svg>
                                {data.beds}
                              </p>

                              <p className="flex items-center font-medium text-gray-800 md:text-sm">
                                <svg
                                  className="w-5 h-5 fill-current mr-2"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 480 512"
                                >
                                  <path d="M423.18 195.81l-24.94-76.58C387.51 86.29 356.81 64 322.17 64H157.83c-34.64 0-65.34 22.29-76.07 55.22L56.82 195.8C24.02 205.79 0 235.92 0 271.99V400c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48v-16h256v16c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48V271.99c0-36.07-24.02-66.2-56.82-76.18zm-310.99-66.67c6.46-19.82 24.8-33.14 45.64-33.14h164.34c20.84 0 39.18 13.32 45.64 33.13l20.47 62.85H91.72l20.47-62.84zM80 400c0 8.83-7.19 16-16 16H48c-8.81 0-16-7.17-16-16v-16h48v16zm368 0c0 8.83-7.19 16-16 16h-16c-8.81 0-16-7.17-16-16v-16h48v16zm0-80.01v32H32v-80c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v48zM104.8 248C78.84 248 60 264.8 60 287.95c0 23.15 18.84 39.95 44.8 39.95l10.14.1c39.21 0 45.06-20.1 45.06-32.08 0-24.68-31.1-47.92-55.2-47.92zm10.14 56c-3.51 0-7.02-.1-10.14-.1-12.48 0-20.8-6.38-20.8-15.95S92.32 272 104.8 272s31.2 14.36 31.2 23.93c0 7.17-10.53 8.07-21.06 8.07zm260.26-56c-24.1 0-55.2 23.24-55.2 47.93 0 11.98 5.85 32.08 45.06 32.08l10.14-.1c25.96 0 44.8-16.8 44.8-39.95 0-23.16-18.84-39.96-44.8-39.96zm0 55.9c-3.12 0-6.63.1-10.14.1-10.53 0-21.06-.9-21.06-8.07 0-9.57 18.72-23.93 31.2-23.93s20.8 6.38 20.8 15.95-8.32 15.95-20.8 15.95z"></path>
                                </svg>
                                2
                              </p>

                              <p className="flex items-center font-medium text-gray-800 md:text-sm">
                                <div className="border p-2 rounded-sm">
                                  <svg
                                    className="w-7 h-7 fill-current mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path d="M504,256H64V61.25a29.26,29.26,0,0,1,49.94-20.69L139.18,65.8A71.49,71.49,0,0,0,128,104c0,20.3,8.8,38.21,22.34,51.26L138.58,167a8,8,0,0,0,0,11.31l11.31,11.32a8,8,0,0,0,11.32,0L285.66,65.21a8,8,0,0,0,0-11.32L274.34,42.58a8,8,0,0,0-11.31,0L251.26,54.34C238.21,40.8,220.3,32,200,32a71.44,71.44,0,0,0-38.2,11.18L136.56,18A61.24,61.24,0,0,0,32,61.25V256H8a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8H32v96c0,41.74,26.8,76.9,64,90.12V504a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V480H384v24a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V474.12c37.2-13.22,64-48.38,64-90.12V288h24a8,8,0,0,0,8-8V264A8,8,0,0,0,504,256ZM228.71,76.9,172.9,132.71A38.67,38.67,0,0,1,160,104a40,40,0,0,1,40-40A38.67,38.67,0,0,1,228.71,76.9ZM448,384a64.07,64.07,0,0,1-64,64H128a64.07,64.07,0,0,1-64-64V288H448Z"></path>
                                  </svg>
                                </div>

                                {data.bath}
                              </p>
                            </div>
                          </div>
                          <div class="p-3 md:py-4 md:px-5 bg-gray-100 grid grid-cols-2 content-center">
                            <div class="mt-2 text-gray-600 text-sm ">
                              *Prices may vary depending on selected date.
                            </div>
                            <div class="sm:flex  sm:items-center  flex justify-end ">
                              <div>
                                <div class=" text-gray-700 md:text-sm  ">
                                  <span class="text-gray-900 font-bold md:text-lg">
                                    {data.offer == "rent" ? (
                                      <span>
                                        {price(data.price)}
                                        <span className="text-gray-700 font-normal md:text-sm">
                                          {" "}
                                          /Mo
                                        </span>
                                      </span>
                                    ) : (
                                      price(data.price)
                                    )}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
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

export default Cardlist;
