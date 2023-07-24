import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Gallery from "../../elements/Gallary";
// import Slider1 from "../../elements/Slider1";
import SingleRight from "./SingleRight";

const SinglePage = () => {
  const [fetchData, setfetchData] = useState([]);
  const [fetchFiles, setFetchFiles] = useState([]);
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("item"));
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token.token}`,
  };

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`http://localhost:5000/listings/singleprop/${id}`)
        .then((fetch) => {
          setFetchFiles(() => fetch.data.files);
          console.log(fetch.data.files);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`http://localhost:5000/listings/${id}`)
        .then((fetch) => {
          setfetchData(() => fetch.data.response);
          console.log(fetch.data.response);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <div className="flex gap-5">
      <div className=" w-4/6 shadow rounded-lg mb-10 p-4 bg-white">
        <div className=" photoarea ">
          <div className="w-full h-full ">
            <Gallery images={fetchFiles} />
          </div>
        </div>
        <div className="slider">{/* <Slider1 /> */}</div>

        <div className="titlearea">
          <div>
            <p className="offer">
              {fetchData.offer === "rent" ? "Rent" : "Sale"}
            </p>
            <p className="title text-4xl font-bold">{fetchData.name}</p>
            <div>
              <ul className="flex gap-2 h-5 ">
                <li className=" flex content-center justify-between gap-2">
                  <p>APARTMENT</p>
                  <div className="text-gray-500">|</div>
                </li>
                <li className="border-r-2 pr-2 ">PROPERTY ID: 55K886</li>
                <li className="border-r-2 pr-2 ">VIEWS 858</li>
                <li>STARS</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="description mt-8">
          <div className="descriptionTitle font-bold text-2xl">Description</div>
          <div className="descriptionBody mt-3">
            {/* Lorem ipsum dolor sit amet, wisi nemore fastidii at vis, eos equidem
            admodum disputando ea. An duis dolor appellantur mea, est id zril
            nobis appellantur. Ei sea duis senserit qualisque, te facilisis
            appellantur pri. Id aperiri aliquam interesset mel. Contentiones
            vituperatoribus id est, per prima nihil scripta no. No semper
            forensibus adipiscing quo. Amet deleniti lobortis et eam. In
            oporteat pertinacia quo, cu qui antiopam intellegebat, ei alii paulo
            has. In alia eros ornatus pri, graeci accusata pericula an vix. His
            ne homero dignissim, aliquam dolores scriptorem vis ut. Sit ad suas
            adhuc interesset, nec no essent iuvaret adipiscing everti. */}
            <div className="sandy1">
              this is sandra property we trying to learn a new thing
            </div>
          </div>
        </div>
        <hr className="my-8 h-2 " />
        <div className="propfeatures mt-8">
          <div className="featureHead">
            <div className="featTitle font-bold text-xl">Property features</div>
            <div className="featBody mt-3">
              Lorem ipsum dolor sit amet, homero debitis temporibus in mei, at
              sit voluptua antiopam hendrerit. Lorem epicuri eu per. Mediocrem
              torquatos deseruisse te eum commodo.
            </div>
          </div>

          {/* *********************************** details ********************************************/}
          <div className="featureContent">
            <div className="featureTitle mt-8 font-bold">Property details</div>
            <div className="featureBody flex w-full mt-5 gap-8">
              <div className="leftfeat w-1/2">
                <div>
                  <div className="leftfeat flex justify-between ">
                    <div className="iconandname flex gap-2 ">
                      <p className="icon">i</p>
                      <p className="label text-gray-500  ">Size:</p>
                    </div>
                    <div className="featvalue font-semibold">
                      150m <sup>2</sup>
                    </div>
                  </div>
                  <hr className="my-2" />
                </div>
                <div>
                  <div className="leftfeat flex justify-between ">
                    <div className="iconandname flex gap-2 ">
                      <p className="icon">i</p>
                      <p className="label text-gray-500">Bedrooms:</p>
                    </div>
                    <div className="featvalue font-semibold">
                      {fetchData.beds}
                    </div>
                  </div>
                  <hr className="my-2" />
                </div>
                <div>
                  <div className="leftfeat flex justify-between ">
                    <div className="iconandname flex gap-2 ">
                      <p className="icon">i</p>
                      <p className="label text-gray-500  ">Bathrooms:</p>
                    </div>
                    <div className="featvalue font-semibold">
                      {fetchData.bath}
                    </div>
                  </div>
                  <hr className="my-2" />
                </div>
                <div>
                  <div className="leftfeat flex justify-between ">
                    <div className="iconandname flex gap-2 ">
                      <p className="icon">i</p>
                      <p className="label text-gray-500">Floor:</p>
                    </div>
                    <div className="featvalue font-semibold">2nd</div>
                  </div>
                  <hr className="my-2" />
                </div>
                <div>
                  <div className="leftfeat flex justify-between ">
                    <div className="iconandname flex gap-2 ">
                      <p className="icon">i</p>
                      <p className="label text-gray-500  ">Additional space:</p>
                    </div>
                    <div className="featvalue font-semibold">Basement</div>
                  </div>
                  <hr className="my-2" />
                </div>
              </div>
              <div className="rightfeat w-1/2">
                <div>
                  <div className="leftfeat flex justify-between ">
                    <div className="iconandname flex gap-2 ">
                      <p className="icon">i</p>
                      <p className="label text-gray-500">Furnishing:</p>
                    </div>
                    <div className="featvalue font-semibold">
                      semi furnished
                    </div>
                  </div>
                  <hr className="my-2" />
                </div>
                <div>
                  <div className="leftfeat flex justify-between ">
                    <div className="iconandname flex gap-2 ">
                      <p className="icon">i</p>
                      <p className="label text-gray-500">Ceiling Height:</p>
                    </div>
                    <div className="featvalue font-semibold">3m</div>
                  </div>
                  <hr className="my-2" />
                </div>
                <div>
                  <div className="leftfeat flex justify-between ">
                    <div className="iconandname flex gap-2 ">
                      <p className="icon">i</p>
                      <p className="label text-gray-500">Construction Year:</p>
                    </div>
                    <div className="featvalue font-semibold">1998</div>
                  </div>
                  <hr className="my-2" />
                </div>
                <div>
                  <div className="leftfeat flex justify-between ">
                    <div className="iconandname flex gap-2 ">
                      <p className="icon">i</p>
                      <p className="label  text-gray-500 ">Renovation:</p>
                    </div>
                    <div className="featvalue font-semibold">2020</div>
                  </div>
                  <hr className="my-2" />
                </div>
              </div>
            </div>
          </div>

          {/* *********************************** utility ********************************************/}
          <div className="featureContent">
            <div className="featureTitle mt-8 font-bold">Property utility</div>
            <div className="featureBody flex w-full mt-5 gap-8">
              <div className="leftfeat w-1/2">
                <div>
                  <div className="leftfeat flex justify-between ">
                    <div className="iconandname flex gap-2 ">
                      <p className="icon">i</p>
                      <p className="label text-gray-500  ">Size:</p>
                    </div>
                    <div className="featvalue font-semibold">
                      150m <sup>2</sup>
                    </div>
                  </div>
                  <hr className="my-2" />
                </div>
                <div>
                  <div className="leftfeat flex justify-between ">
                    <div className="iconandname flex gap-2 ">
                      <p className="icon">i</p>
                      <p className="label text-gray-500">Bedrooms:</p>
                    </div>
                    <div className="featvalue font-semibold">2</div>
                  </div>
                  <hr className="my-2" />
                </div>
                <div>
                  <div className="leftfeat flex justify-between ">
                    <div className="iconandname flex gap-2 ">
                      <p className="icon">i</p>
                      <p className="label text-gray-500  ">Bathrooms:</p>
                    </div>
                    <div className="featvalue font-semibold">2</div>
                  </div>
                  <hr className="my-2" />
                </div>
                <div>
                  <div className="leftfeat flex justify-between ">
                    <div className="iconandname flex gap-2 ">
                      <p className="icon">i</p>
                      <p className="label text-gray-500">Floor:</p>
                    </div>
                    <div className="featvalue font-semibold">2nd</div>
                  </div>
                  <hr className="my-2" />
                </div>
                <div>
                  <div className="leftfeat flex justify-between ">
                    <div className="iconandname flex gap-2 ">
                      <p className="icon">i</p>
                      <p className="label text-gray-500  ">Additional space:</p>
                    </div>
                    <div className="featvalue font-semibold">Basement</div>
                  </div>
                  <hr className="my-2" />
                </div>
              </div>
              <div className="rightfeat w-1/2">
                <div>
                  <div className="leftfeat flex justify-between ">
                    <div className="iconandname flex gap-2 ">
                      <p className="icon">i</p>
                      <p className="label text-gray-500">Furnishing:</p>
                    </div>
                    <div className="featvalue font-semibold">
                      semi furnished
                    </div>
                  </div>
                  <hr className="my-2" />
                </div>
                <div>
                  <div className="leftfeat flex justify-between ">
                    <div className="iconandname flex gap-2 ">
                      <p className="icon">i</p>
                      <p className="label text-gray-500">Ceiling Height:</p>
                    </div>
                    <div className="featvalue font-semibold">3m</div>
                  </div>
                  <hr className="my-2" />
                </div>
                <div>
                  <div className="leftfeat flex justify-between ">
                    <div className="iconandname flex gap-2 ">
                      <p className="icon">i</p>
                      <p className="label text-gray-500">Construction Year:</p>
                    </div>
                    <div className="featvalue font-semibold">1998</div>
                  </div>
                  <hr className="my-2" />
                </div>
                <div>
                  <div className="leftfeat flex justify-between ">
                    <div className="iconandname flex gap-2 ">
                      <p className="icon">i</p>
                      <p className="label  text-gray-500 ">Renovation:</p>
                    </div>
                    <div className="featvalue font-semibold">2020</div>
                  </div>
                  <hr className="my-2" />
                </div>
              </div>
            </div>
          </div>
          {/* *********************************** outdoor ********************************************/}
          <div className="featureContent">
            <div className="featureTitle mt-8 font-bold">Outdoor features</div>
            <div className="featureBody flex w-full mt-5 gap-8">
              <div className="leftfeat w-1/2">
                <div>
                  <div className="leftfeat flex justify-between ">
                    <div className="iconandname flex gap-2 ">
                      <p className="icon">i</p>
                      <p className="label text-gray-500  ">Size:</p>
                    </div>
                    <div className="featvalue font-semibold">
                      150m <sup>2</sup>
                    </div>
                  </div>
                  <hr className="my-2" />
                </div>
                <div>
                  <div className="leftfeat flex justify-between ">
                    <div className="iconandname flex gap-2 ">
                      <p className="icon">i</p>
                      <p className="label text-gray-500">Bedrooms:</p>
                    </div>
                    <div className="featvalue font-semibold">2</div>
                  </div>
                  <hr className="my-2" />
                </div>
                <div>
                  <div className="leftfeat flex justify-between ">
                    <div className="iconandname flex gap-2 ">
                      <p className="icon">i</p>
                      <p className="label text-gray-500  ">Bathrooms:</p>
                    </div>
                    <div className="featvalue font-semibold">2</div>
                  </div>
                  <hr className="my-2" />
                </div>
                <div>
                  <div className="leftfeat flex justify-between ">
                    <div className="iconandname flex gap-2 ">
                      <p className="icon">i</p>
                      <p className="label text-gray-500">Floor:</p>
                    </div>
                    <div className="featvalue font-semibold">2nd</div>
                  </div>
                  <hr className="my-2" />
                </div>
                <div>
                  <div className="leftfeat flex justify-between ">
                    <div className="iconandname flex gap-2 ">
                      <p className="icon">i</p>
                      <p className="label text-gray-500  ">Additional space:</p>
                    </div>
                    <div className="featvalue font-semibold">Basement</div>
                  </div>
                  <hr className="my-2" />
                </div>
              </div>
              <div className="rightfeat w-1/2">
                <div>
                  <div className="leftfeat flex justify-between ">
                    <div className="iconandname flex gap-2 ">
                      <p className="icon">i</p>
                      <p className="label text-gray-500">Furnishing:</p>
                    </div>
                    <div className="featvalue font-semibold">
                      semi furnished
                    </div>
                  </div>
                  <hr className="my-2" />
                </div>
                <div>
                  <div className="leftfeat flex justify-between ">
                    <div className="iconandname flex gap-2 ">
                      <p className="icon">i</p>
                      <p className="label text-gray-500">Ceiling Height:</p>
                    </div>
                    <div className="featvalue font-semibold">3m</div>
                  </div>
                  <hr className="my-2" />
                </div>
                <div>
                  <div className="leftfeat flex justify-between ">
                    <div className="iconandname flex gap-2 ">
                      <p className="icon">i</p>
                      <p className="label text-gray-500">Construction Year:</p>
                    </div>
                    <div className="featvalue font-semibold">1998</div>
                  </div>
                  <hr className="my-2" />
                </div>
                <div>
                  <div className="leftfeat flex justify-between ">
                    <div className="iconandname flex gap-2 ">
                      <p className="icon">i</p>
                      <p className="label  text-gray-500 ">Renovation:</p>
                    </div>
                    <div className="featvalue font-semibold">2020</div>
                  </div>
                  <hr className="my-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* *********************************** location  ********************************************/}
        <hr className="my-8 h-2 " />
        <div className="propaddress mt-8">
          <p className="propHead font-bold text-2xl mt-4">Location</p>
          <div className="flex justify-between mt-4">
            <p className="content leading-8">
              Dome faase street, New Mamprobi soko. <br /> Accra Ghana
            </p>
            <button className="w-50 text-white font-bold px-5 h-full py-3 bg-slate-900">
              Show on map
            </button>
          </div>
        </div>

        <hr className="my-8 h-2 " />

        {/* *********************************** whats nearby  ********************************************/}

        <div className="nearbyHead">
          <div className="featTitle font-bold text-2xl">What's nearby? </div>
          <div className="featBody mt-3">
            Lorem ipsum dolor sit amet, homero debitis temporibus in mei, at sit
            voluptua antiopam hendrerit. Lorem epicuri eu per. Mediocrem
            torquatos deseruisse te eum commodo.
          </div>
        </div>

        <div className="featureContent">
          <div className="featureBody flex w-full mt-5 gap-8">
            <div className="leftfeat w-1/2">
              <div>
                <div className="leftfeat flex gap-2 ">
                  <p className="label  text-gray-500 ">School:</p>

                  <div className="featvalue font-semibold">0.7km</div>
                </div>
              </div>
              <div>
                <div className="leftfeat flex gap-2 ">
                  <p className="label  text-gray-500 ">University:</p>

                  <div className="featvalue font-semibold">1.7km</div>
                </div>
              </div>
              <div>
                <div className="leftfeat flex gap-2 ">
                  <p className="label  text-gray-500 ">Grocery center:</p>

                  <div className="featvalue font-semibold">0.3km</div>
                </div>
              </div>

              <div>
                <div className="leftfeat flex gap-2">
                  <p className="label  text-gray-500 ">Market:</p>

                  <div className="featvalue font-semibold">0.8km</div>
                </div>
              </div>
            </div>
            <div className="rightfeat w-1/2">
              <div>
                <div className="leftfeat flex gap-2 ">
                  <p className="label  text-gray-500 ">Hospital, medical:</p>

                  <div className="featvalue font-semibold">1km</div>
                </div>
              </div>
              <div>
                <div className="leftfeat flex gap-2">
                  <p className="label  text-gray-500 ">Lorry station:</p>

                  <div className="featvalue font-semibold">0.1km</div>
                </div>
              </div>
              <div>
                <div className="leftfeat flex gap-2 ">
                  <p className="label  text-gray-500 ">Gym, wellness:</p>

                  <div className="featvalue font-semibold">0.5km</div>
                </div>
              </div>
              <div>
                <div className="leftfeat flex gap-2 ">
                  <p className="label  text-gray-500 ">Park:</p>

                  <div className="featvalue font-semibold">0.5km</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-10 h-2 " />

        <div className="mt-16">
          <h1 className="font-bold text-2xl">1 comment</h1>
          <div className="agentcard flex gap-2 mt-4">
            <div className=" ">
              <div className="mr-2 h-24 w-24 rounded overflow-hidden relative bg-gray-200"></div>
            </div>
            <div className="cardbody">
              <div className="cardnameandstars flex gap-2">
                <p className="font-bold text-xl">Anne Reid</p>
                <p>stars</p>
              </div>

              <div className="cardcontent leading-8 mt-3">
                Lorem ipsum dolor sit amet, id duo epicuri vulputate. Ex eum
                eius ludus has cu nobis insolens omittantur. Ex nostrum
                repudiare abhorreant cum velit.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 commentsection ">
          <h1 className="comenttite font-bold text-2xl">leave a reply</h1>
          <p className="mt-4">
            Your email address will not be published. Required fields are marked
            *
          </p>
        </div>
        <div>
          <p className="mt-2">your rating</p>
          <p>stars</p>
        </div>
        <div className="bottom mt-8">
          <form action="submit" className="flex flex-col  gap-4">
            <textarea
              className="w-full px-3 py-2 bg-white placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              placeholder="message"
              type="text"
              rows="8"
              cols="50"
            />
            <input
              className="w-full px-3 py-2 bg-white placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              placeholder="Your name*"
              type="text"
            />
            <input
              className=" w-full px-3 py-2 bg-white placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              placeholder="Your email*"
              type="text"
            />
            <input
              className="w-full px-3 py-2 bg-white placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              placeholder="Your phone*"
              type="text"
            />

            <div className="actiononcomment flex justify-between">
              <div>
                <label class="inline-flex items-center mt-3">
                  <input
                    type="checkbox"
                    class="form-checkbox h-5 w-5 text-gray-600  border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                  <span class="ml-2 text-gray-700 text-sm">
                    Save my name, email, and website in this browser for the
                    next time I comment
                  </span>
                </label>
              </div>
              <button className="bg-slate-700 px-10 py-4 text-center my-2 text-white">
                Post Comment
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="w-2/6 shadow rounded-lg mb-10 p-4 bg-white">
        <SingleRight />
      </div>
    </div>
  );
};

export default SinglePage;
