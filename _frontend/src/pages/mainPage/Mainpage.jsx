import React, { useState, useEffect } from "react";
import axios from "axios";
import Cardlist from "./Cardlist";
import Searchform from "./Searchform";
import Dropdown from "../../components/dropdown/Dropdown";
import Droplist from "../../components/dropdown/Droplist";
import {
  people,
  bedrooms,
  category,
  offers,
} from "../../components/dropdown/droparrays";

const Mainpage = () => {
  const [selectOffer, setselectOffer] = useState(offers[0]);
  const [selectcategory, setselectcategory] = useState(category[0]);
  const [selectbedroom, setselectbedroom] = useState(bedrooms[0]);
  const [selectpeople, setselectpeople] = useState(people[0]);

  const filter = [
    { Offer: selectOffer.name },
    { category: selectcategory.name },
    { bedroom: selectbedroom.name },
    { people: selectpeople.name },
  ];

  console.log(filter);
  return (
    <div className="flex gap-x-5">
      <div className="w-1/4">
        <div className="shadow rounded-lg mb-10 px-4 bg-white w-full p-4">
          <p className="font-bold text-lg ">Filter</p>{" "}
          <div className="mt-8">
            Offers:
            <Droplist
              people={offers}
              selected={selectOffer}
              setSelected={setselectOffer}
            />
          </div>
          <div className="mt-8">
            Category:
            <Droplist
              people={category}
              selected={selectcategory}
              setSelected={setselectcategory}
            />
          </div>
          <div className="mt-8">
            Bedroom:
            <Droplist
              people={bedrooms}
              selected={selectbedroom}
              setSelected={setselectbedroom}
            />
          </div>
          <div className="mt-8">
            People:
            <Droplist
              people={people}
              selected={selectpeople}
              setSelected={setselectpeople}
            />
          </div>
          <div className="flex justify-end">
            {" "}
            <button
              type=""
              class="w-full mt-8  h-10 bg-gray-800 text-white rounded-md px-4 py-1 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="w-3/4">
        <div>
          <div className="shadow rounded-lg mb-10 px-4 bg-white">
            <Searchform />
          </div>

          <Cardlist />
          <div>
            {/* <div class="max-w-3xl px-10 my-4 py-6 bg-white rounded-lg shadow-md">
          <div class="flex justify-between items-center">
            <span class="font-light text-gray-600">mar 10, 2019</span>
            <a
              class="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500"
              href="#"
            >
              Design
            </a>
          </div>
          <div class="mt-2">
            <a
              class="text-2xl text-gray-700 font-bold hover:text-gray-600"
              href="#"
            >
              Accessibility tools for designers and developers
            </a>
            <p class="mt-2 text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              expedita dicta totam aspernatur doloremque. Excepturi iste iusto
              eos enim reprehenderit nisi, accusamus delectus nihil quis facere
              in modi ratione libero!
            </p>
          </div>
          <div class="flex justify-between items-center mt-4">
            <a class="text-blue-600 hover:underline" href="#">
              Read more
            </a>
            <div>
              <a class="flex items-center" href="#">
                <img
                  class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                  src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80"
                  alt="avatar"
                />
                <h1 class="text-gray-700 font-bold">Khatab wedaa</h1>
              </a>
            </div>
          </div>
        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
