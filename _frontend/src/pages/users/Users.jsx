import React, { useState } from "react";
import Possibility from "../../container/possibility/Possibility";
//import { v4 as uuid } from "uuid";
import {
  UpdateRecord,
  DeleteConfirm,
  ReadData,
  Header,
  Add,
} from "../../container";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MdOutlineAddCircleOutline } from "react-icons/md";
//import Add from "../../container";
import { RiDeleteBin7Line } from "react-icons/ri";

const Users = () => {
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
        .get("http://localhost:5000/users", { headers: headers })
        .then((fetch) => {
          setfetchData(() => fetch.data.value);
          console.log(fetch.data.value);
          setIsLoading(false);
        })
        .catch(() => navigate("/"));
    };

    fetchData();
  }, []);

  // const createNew = async() =>{
  //   let newRecord = await(axios.post('http://localhost:5000/api/',Inputs).then((response)=> console.log(response)).catch((err)=> console.log(err)))
  //   return newRecord
  // }

  //   const ddata = fetchData.map((user)=> user.email)
  //   console.log(ddata)

  // const notify = () => toast("Wow so easy !");

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
    axios.delete(`http://localhost:5000/api/${DeleteId}`);

    // const newdata = data.filter((e) => {
    //   return e.id !== DeleteId;
    // });
    //localStorage.setItem("items", JSON.stringify(newdata));
    //let node = e.target.parentNode.parentNode.parentNode;
    // node.remove();
    setshowModal(false);
    notifyDelete();
  };

  const tableData = () => {
    const something = fetchData.map((data, index) => (
      <tr
        // onClick={() => handleClickUpdate(data._id)}
        className="cursor-pointer border-b border-slate-200 transition duration-300 ease-in-out "
        key={data._id}
      >
        <th className="text-gray-500  font-medium py-4 px-6 text-sm whitespace-nowrap hover:text-blue-500">
          {data.user_name}
        </th>
        <th className=" text-gray-500 font-medium py-4 px-6 text-sm ">
          {data.email}
        </th>
        <td className="text-sm text-gray-500 font-light px-6 py-4 whitespace-nowrap">
          {data.createdAt}
        </td>

        <td className="py-4 px-6 flex ">
          <div className="m-0">
            {/* <span
              className=" cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline mr-3"
              onClick={() => handleClickUpdate(data._id)}
            >
              Edit
            </span> */}

            <button
              onClick={() => handleClickDelete(data._id)}
              className=" p-1"
            >
              <span className="text-red-500">
                <RiDeleteBin7Line size={20} />
              </span>
            </button>
            {/* <span
              className=" cursor-pointer text-center text-sm bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded focus:outline-none focus:shadow-outline"
              onClick={() => handleClickDelete(data._id)}
              data-modal-toggle="defaultModal"
            >
              Delete
            </span> */}
          </div>
        </td>
      </tr>
    ));

    return something;
  };

  const tableHead = () => {
    return (
      <tr className="text-gray-500 bg-color">
        <th className="text-sm font-medium  px-6 py-4 ">Username</th>
        <th className="text-sm font-medium  px-6 py-4 ">Email</th>
        <th scope="col" className=" text-sm font-medium  px-6 py-4 ">
          Posted
        </th>
        <th scope="col" className="text-sm font-medium  px-6 py-4 ">
          Action
        </th>
      </tr>
    );
  };

  const notifyUpdate = () => toast.info("succefully updated");
  const notifyDelete = () => toast.warning("succefully Deleted");
  const notifyCreate = () => toast.success("your item has been added");

  if (isLoading) {
    return <p>is loading</p>;
  }
  return (
    <>
      <div className="">
        <div>{/* <Header /> */}</div>
        <div className="grid grid-cols-1 lg:grid-cols-1 w-2xl grid grid-cols-1 lg:grid-cols-2 gap-6  w-2xl container px-2 mx-auto px-2 mx-auto">
          <article className="">
            <div className="bg-white shadow rounded-lg mb-6 p-4">
              <div className="flex justify-end">
                <button
                  onClick={() => handleClickAdd()}
                  className=" flex space-x-2 outline-none focus:outline-none border px-3  py-2 mb-4 bg-blue-800 rounded flex items-center  text-white"
                >
                  <span className="text-white">
                    <MdOutlineAddCircleOutline size={20} />
                  </span>
                  <p>New</p>
                </button>
              </div>
              <Possibility data={tableData()} head={tableHead()} />
            </div>
          </article>
          {/* <aside className="">
            <div className="bg-white shadow rounded-lg p-10">
              <h1 className="mb-5 md:text-[18px] font-medium text-gray-800">
                Enter a new record
              </h1>
              <form
                className="flex flex-col gap-1 "
                action=""
                onSubmit={(e) => handleSubmit(e)}
              >
                <div className="grid grid-cols-2 gap-4">
                  <label className="grid content-center">
                    First Name:
                    <input
                      className="mt-2 w-full rounded-lg p-3 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400"
                      type="text"
                      name="first_name"
                      value={Inputs.first_name || ""}
                      onChange={handleChange}
                    />
                  </label>

                  <label className="grid mt-3" htmlFor="">
                    Last Name:
                    <input
                      className="mt-2 w-full rounded-lg p-3 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400"
                      type="text"
                      name="last_name"
                      id=""
                      value={Inputs.last_name || ""}
                      onChange={handleChange}
                    />
                  </label>
                  <div className="grid grid-cols-2 gap-">
                    <label className="grid mt-3" htmlFor="">
                      Age:
                      <input
                        className="mt-2 w-full rounded-lg p-3 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400"
                        type="number"
                        name="age"
                        id=""
                        value={Inputs.age || ""}
                        onChange={handleChange}
                      />
                    </label>
                    <label htmlFor="" className="grid mt-3">
                      Date of Birth:
                      <input
                        className="mt-2 w-full rounded-lg p-3 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400"
                        type="Date"
                        name="dateOfBirth"
                        id=""
                        value={Inputs.dateOfBirth || ""}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-5 bg-gray-600 text-white px-32 py-4 rounded-md text-1xl font-medium hover:bg-gray-700 transition duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </aside> */}
        </div>
      </div>
      {/* <div className="grid grid-cols-1  lg:grid-cols-1 gap-6 w-2xl grid grid-cols-1 lg:grid-cols-2 gap-6  w-2xl container px-2 mx-auto px-2 mx-auto">
        <aside>
          <div className="bg-white shadow rounded-lg mt-12 p-4">
            <ReadData newData={DisplayData} />
          </div>
        </aside>
      </div> */}

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

export default Users;
