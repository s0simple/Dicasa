import React, { useState } from "react";
import Possibility from "../../container/possibility/Possibility";
import { v4 as uuid } from "uuid";
import { UpdateRecord, DeleteConfirm, ReadData, Header } from "../../container";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [Inputs, setInputs] = useState("");
  const [showModal, setshowModal] = useState(false);
  const [showUpdate, setshowUpdate] = useState(false);
  const [DeleteId, setDeleteId] = useState("");
  const [UpdateData, setUpdateData] = useState({});
  const [DisplayData, setDisplayData] = useState({});

  // const notify = () => toast("Wow so easy !");

  const data = JSON.parse(localStorage.getItem("items"));
  const AllInputs = JSON.parse(localStorage.getItem("items")) || [];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, id: uuid(), [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Inputs === "" || Inputs.id === "") {
      alert("nothing to submit");
    } else {
      AllInputs.unshift(Inputs);
      localStorage.setItem("items", JSON.stringify(AllInputs));
      notifyCreate();
    }

    setInputs(() => ({
      id: "",
      firstName: "",
      lastName: "",
      age: "",
      DateOfBirth: "",
    }));
  };

  const handleClickUpdate = (id) => {
    const newdata = data.find((item) => {
      return item.id === id;
    });
    //setUpdateId(id);
    setshowUpdate(true);
    setUpdateData(newdata);
  };
  const handleClickRead = (id) => {
    const newdata = data.find((item) => {
      return item.id === id;
    });
    setDisplayData(newdata);
  };

  const handleClickDelete = (id) => {
    setDeleteId(id);
    setshowModal(true);
  };

  const handleDelete = (e) => {
    const newdata = data.filter((e) => {
      return e.id !== DeleteId;
    });
    localStorage.setItem("items", JSON.stringify(newdata));
    // let node = e.target.parentNode.parentNode.parentNode;
    // node.remove();
    setshowModal(false);
    notifyDelete();
  };

  const tableData = () => {
    const something = data.map((data, index) => (
      <tr
        onClick={() => handleClickRead(data.id)}
        className="cursor-pointer border-b border-slate-600 transition duration-300 ease-in-out hover:bg-gray-900 hover:text-black"
        key={data.id}
      >
        <th className="text-white  font-medium py-4 px-6 text-sm whitespace-nowrap ">
          {data.firstName}
        </th>
        <th className=" text-white font-medium py-4 px-6 text-sm ">
          {data.lastName}
        </th>
        <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
          {data.age}
        </td>
        <td className="text-sm text-white font-light py-4 px-6 whitespace-nowrap">
          {data.DateOfBirth}
        </td>

        <td className="py-4 px-6 flex ">
          <div className="m-0">
            <span
              className=" cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline mr-3"
              onClick={() => handleClickUpdate(data.id)}
            >
              Edit
            </span>
            <span
              className=" cursor-pointer text-center text-sm bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded focus:outline-none focus:shadow-outline"
              onClick={() => handleClickDelete(data.id)}
              data-modal-toggle="defaultModal"
            >
              Delete
            </span>
          </div>
        </td>
      </tr>
    ));

    return something;
  };

  const tableHead = () => {
    return (
      <tr className="text-white  ">
        <th className="text-sm font-medium  px-6 py-4 ">First Name</th>
        <th className="text-sm font-medium  px-6 py-4 ">Last Name</th>
        <th scope="col" className=" text-sm font-medium  px-6 py-4 ">
          Age
        </th>
        <th scope="col" className="text-sm font-medium  px-6 py-4 ">
          Date of Birth
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

  return (
    <>
      <div className="">
        <div>
          <Header />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-12 mx-12 w-2xl grid grid-cols-1 lg:grid-cols-2 gap-6 my-12 mx-12 w-2xl container px-2 mx-auto px-2 mx-auto">
          <aside className="">
            <div className="bg-white shadow rounded-lg p-10">
              <h1 className="mb-5 md:text-[18px] font-medium text-gray-800">
                Enter a new record
              </h1>
              <form
                className="flex flex-col gap-1 "
                action=""
                onSubmit={(e) => handleSubmit(e)}
              >
                <label className="grid content-center">
                  FirstName:
                  <input
                    className="mt-2 w-full rounded-lg p-3 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400"
                    type="text"
                    name="firstName"
                    value={Inputs.firstName || ""}
                    onChange={handleChange}
                  />
                </label>

                <label className="grid mt-3" htmlFor="">
                  Last Name:
                  <input
                    className="mt-2 w-full rounded-lg p-3 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400"
                    type="text"
                    name="lastName"
                    id=""
                    value={Inputs.lastName || ""}
                    onChange={handleChange}
                  />
                </label>
                <div className="grid grid-cols-2 gap-4">
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
                      name="DateOfBirth"
                      id=""
                      value={Inputs.DateOfBirth || ""}
                      onChange={handleChange}
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  className="mt-5 bg-gray-600 text-white px-32 py-4 rounded-md text-1xl font-medium hover:bg-gray-700 transition duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </aside>

          <article className="">
            <div className="bg-white shadow rounded-lg mb-6 p-4">
              <Possibility data={tableData()} head={tableHead()} />
            </div>
          </article>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 my-12 mx-12 w-2xl grid grid-cols-1 lg:grid-cols-2 gap-6 my-12 mx-12 w-2xl container px-2 mx-auto px-2 mx-auto">
        <aside>
          <div className="bg-white shadow rounded-lg mb-6 p-4">
            <ReadData newData={DisplayData} />
          </div>
        </aside>
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
        <ToastContainer />
      </div>
    </>
  );
};

export default Home;
