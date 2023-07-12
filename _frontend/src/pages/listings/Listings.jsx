import React, { useState, Fragment } from "react";
import Possibility from "../../container/possibility/Possibility";
//import { v4 as uuid } from "uuid";
// import "./Member.css";
import { UpdateRecord, DeleteConfirm, Add } from "../../container";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GrMore } from "react-icons/gr";
import { RiEditLine, RiDeleteBinLine } from "react-icons/ri";
import { Menu, Transition } from "@headlessui/react";
import Cards from "../../components/cards/Cards";
import { Loader } from "../../components";
import TimeAgo from "timeago-react";

const Listings = () => {
  const [Inputs, setInputs] = useState("");
  const [showModal, setshowModal] = useState(false);
  const [showUpdate, setshowUpdate] = useState(false);
  const [showNewRec, setshowNewRec] = useState(false);
  const [DeleteId, setDeleteId] = useState("");
  const [UpdateData, setUpdateData] = useState({});
  const [DisplayData, setDisplayData] = useState({});
  const [fetchData, setfetchData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("item"));

  //console.log(token)

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token.token}`,
  };

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost:5000/listings")
        .then((fetch) => {
          setfetchData(() => fetch.data.response);
          console.log(fetch.data.response);
          setIsLoading(false);
        })
        .catch(() => navigate("/"));
    };

    fetchData();
  }, []);

  const data = JSON.parse(localStorage.getItem("items"));
  const AllInputs = JSON.parse(localStorage.getItem("items")) || [];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Inputs === "" || Inputs.id === "") {
      alert("nothing to submit");
    } else {
      axios
        .post("http://localhost:5000/api/", Inputs)
        .then((response) => console.log(response))
        .catch((err) => console.log(err));
      //fetchData.unshift(Inputs);
      // localStorage.setItem("items", JSON.stringify(AllInputs));
      notifyCreate();
    }

    setInputs("");
  };

  const handleClickUpdate = async (id) => {
    // const newdata = fetchData.find((item) => {
    //   return item._id === id;
    // });

    let newdata = await axios.get(`http://localhost:5000/api/members/${id}`);

    //setUpdateId(id);

    setshowUpdate(true);
    setUpdateData(() => newdata.data.users);

    console.log(`your uppp ${newdata.data.users}`);
  };

  const handleClickAdd = async () => {
    setshowNewRec(true);
  };

  const handleClickRead = async (id) => {
    let newdata = await axios.get(`http://localhost:5000/api/members/${id}`);

    // const newdata = data.find((item) => {
    //   return item.id === id;
    // });

    setDisplayData(() => newdata.data.users);
  };

  const handleClickDelete = (id) => {
    console.log(id);
    setDeleteId(id);
    setshowModal(true);
  };

  const handleDelete = (e) => {
    axios.delete(`http://localhost:5000/listings/${DeleteId}`);

    setshowModal(false);
    navigate("/dashboard/listings");
    notifyDelete();
  };
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const capitalizeEachWord = (item) => {
    let words = item.split(" ");

    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1);
    }

    return words.join(" ");
  };

  const tableData = () => {
    const something = fetchData.map((data) => (
      <tr
        className="cursor-pointer border-b border-slate-200 transition duration-300 ease-in-out "
        key={data._id}
      >
        <td className="text-sm text-gray-500 font-normalnormal px-6 py-4 whitespace-nowrap ">
          {"#" + data._id.slice(0, 6)}
        </td>
        <td className="text-sm text-gray-500 font-normalnormal px-6 py-4  w-200 h-100 whitespace-nowrap ">
          <img
            src={data.photo_main || `http://localhost:5000/${data.image_main}`}
            alt="avater"
            className="h-20 w-28 rounded"
          />
          {console.log(data.photo_main)}
        </td>
        <th className="text-gray-500   py-4 px-6 text-sm whitespace-nowrap hover:text-blue-500">
          <span className="font-medium">{capitalizeEachWord(data.name)}</span>
          <div className="flex gap-x-2 font-normal">
            <span>
              <p>Bed: {data.beds} </p>
            </span>{" "}
            <span>
              <p>Bath: {data.bath}</p>
            </span>
          </div>
        </th>
        {/* <th className=" text-gray-500 font-medium py-4 px-6 text-sm ">
          {data.last_name}
        </th> */}
        <td className="text-sm text-gray-500 font-medium px-6 py-4 whitespace-nowrap ">
          {/* {price(data.price)} */}
          {data.offer == "rent" ? price(data.price) + "/Mo" : price(data.price)}
        </td>
        <td className="text-sm text-gray-500 font-normal py-4 px-6 whitespace-nowrap">
          {capitalizeEachWord(data.offer)}
        </td>
        <td className="text-sm text-gray-500 font-normal py-4 px-6 whitespace-nowrap">
          {data.city}
        </td>
        <td className="text-sm text-gray-500 font-normal py-4 px-6 whitespace-nowrap">
          {data.posted ? <span>{data.posted} </span> : "Dida"}
        </td>
        <td className="text-sm text-gray-500 font-light py-4 px-6 whitespace-nowrap">
          {data.createdAt ? <TimeAgo datetime={data.createdAt} /> : Date.now()}
        </td>

        <td className="py-4 px-6 ">
          <div className="m-0">
            {/* start actions */}

            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-400 shadow-sm  ring-inset ring-gray-300 hover:bg-gray-50">
                  <GrMore />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          onClick={() => handleClickUpdate(data._id)}
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          <div className="flex items-center gap-x-1">
                            <span>
                              <RiEditLine />
                            </span>
                            <span>Edit</span>
                          </div>
                        </a>
                      )}
                    </Menu.Item>
                  </div>

                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          onClick={() => handleClickDelete(data._id)}
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          <div className="flex items-center gap-x-1">
                            <span>
                              <RiDeleteBinLine />
                            </span>
                            <span>Delete</span>
                          </div>
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </td>
      </tr>
    ));

    return something;
  };

  const tableHead = () => {
    return (
      <tr className="text-gray-500  bg-color">
        <th className="text-sm font-medium  px-6 py-4 "> #Code </th>
        <th className="text-sm font-medium  px-6 py-4 "> Image </th>

        <th scope="col" className=" text-sm font-medium  px-6 py-4 ">
          Name
        </th>
        <th scope="col" className="text-sm font-medium  px-6 py-4 ">
          Price
        </th>
        <th scope="col" className="text-sm font-medium  px-6 py-4 ">
          Offer
        </th>
        <th scope="col" className="text-sm font-medium  px-6 py-4 ">
          Location
        </th>
        <th scope="col" className="text-sm font-medium  px-6 py-4 ">
          Agent
        </th>
        <th scope="col" className="text-sm font-medium  px-6 py-4 ">
          Posted
        </th>
        <th scope="col" className="text-sm font-medium  px-6 py-4 "></th>
      </tr>
    );
  };

  const price = (item) => {
    let price = item.toLocaleString("ak-GH", {
      style: "currency",
      currency: "GHC",
    });
    return price;
  };

  const notifyUpdate = () => toast.info("succefully updated");
  const notifyDelete = () => toast.warning("succefully Deleted");
  const notifyCreate = () => toast.success("your item has been added");

  if (isLoading) {
    return (
      <div className="">
        <Loader />
      </div>
    );
  }
  return (
    <>
      <div className="">
        <div className="bg-white shadow rounded-lg mb-10 p-4  ">
          {/* <Header /> */}

          <span className=" font-medium text-gray-500 text-sm">
            Start by adding new members to the list
          </span>

          <Cards addmodel={() => handleClickAdd()} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-1 w-2xl  gap-6  w-2xl container    mx-auto">
          <article className="">
            <div className="bg-white shadow rounded-lg mb-6 p-4">
              <Possibility data={tableData()} head={tableHead()} />
            </div>
          </article>
        </div>
      </div>

      <div className="">
        <DeleteConfirm
          isVisible={showModal}
          onClose={() => setshowModal(false)}
          onDelete={handleDelete}
        />
      </div>
      <div>
        <UpdateRecord
          isVisible={showUpdate}
          onClose={() => setshowUpdate(false)}
          data={data}
          newData={UpdateData}
          allInputs={AllInputs}
          handleChange={setUpdateData}
          onclosState={setshowUpdate}
          toast={notifyUpdate}
        />
      </div>
      <div>
        <Add
          isVisible={showNewRec}
          onClose={() => setshowNewRec(false)}
          data={data}
          newData={Inputs}
          allInputs={AllInputs}
          handleChange={setInputs}
          onclosState={setshowNewRec}
          toast={notifyUpdate}
          submit={(e) => handleSubmit}
        />
      </div>
      <div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Listings;
