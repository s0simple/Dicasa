import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const UpdateRecord = ({
  handleChange,
  isVisible,
  allInputs,
  onClose,
  newData,
  onclosState,
  toast,
}) => {
  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    handleChange((prev) => ({
      ...prev,
      id: newData.id,
      [name]: value,
    }));
    console.log(newData);
  };

  const { _id, first_name, last_name, age, dateOfBirth } = newData;

  const handleRefresh = () => {
    onclosState(false);
    toast();
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:5000/api/${_id}`, newData);

    // const index = allInputs.map((object) => object.id).indexOf(newData.id);
    // allInputs[index] = newData;

    // localStorage.setItem("items", JSON.stringify(allInputs));

    handleRefresh();

    axios.put();
  };

  return (
    <>
      <Transition appear show={isVisible} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => onClose()}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  {/* close button */}
                  <button
                    type="button"
                    className="text-gray-400 absolute top-5 right-5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-toggle="deleteModal"
                    onClick={() => onClose()}
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>

                  <div className=" ">
                    {/* <div className="rounded-full border border-gray-300 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto">
                      <RiDeleteBin7Fill />
                    </div> */}
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900 p-0 "
                    >
                      Update Record
                    </Dialog.Title>

                    <div className=" ">
                      <div className="mb-5 mt-5 w-full px-10 py-5 flex-col border bg-white  shadow-md rounded-[4px]">
                        <form
                          action=""
                          onSubmit={(e) => handleUpdateSubmit(e, newData.id)}
                        >
                          <label className="w-full">
                            First Name:
                            <input
                              type="text"
                              className="mt-1 w-full border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-yellow-500"
                              name="first_name"
                              value={first_name}
                              onChange={(e) => handleUpdateChange(e)}
                            />
                          </label>

                          <label htmlFor="" className="w-full">
                            LastName:
                            <input
                              className="mt-1 w-full border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-yellow-500"
                              type="text"
                              name="last_name"
                              id=""
                              value={last_name || ""}
                              onChange={handleUpdateChange}
                            />
                          </label>
                          <label htmlFor="" className="w-full">
                            Age:
                            <input
                              className="mt-1 w-full border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-yellow-500"
                              type="number"
                              name="age"
                              id=""
                              value={age || ""}
                              onChange={handleUpdateChange}
                            />
                          </label>
                          <label htmlFor="" className="w-full">
                            Date of Birth:
                            <input
                              className="mt-1 w-full border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-yellow-500"
                              type="Date"
                              name="dateOfBirth"
                              id=""
                              value={dateOfBirth}
                              onChange={handleUpdateChange}
                            />
                          </label>
                        </form>
                      </div>
                    </div>
                  </div>

                  {/* button */}
                  <div className="text-center md:text-right mt-4 md:flex md:justify-end">
                    <button
                      onClick={handleUpdateSubmit}
                      className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-green-200 text-green-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2"
                    >
                      Update
                    </button>
                    <button
                      className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4
          md:mt-0 md:order-1"
                      onClick={() => onClose()}
                    >
                      No, cancel
                    </button>
                  </div>
                  {/* try end*/}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default UpdateRecord;
