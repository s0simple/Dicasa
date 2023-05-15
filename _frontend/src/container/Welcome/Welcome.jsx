import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";

const Welcome = ({ isVisible, onClose }) => {
  const navigate = useNavigate();
  const handleUpdateSubmit = () => {
    navigate("/");
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
                    ></Dialog.Title>

                    <div className=" ">
                      <div className="mb-5 mt-5 w-full px-5 py-2 flex-col  bg-white  rounded-[4px]">
                        {/* <form
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
                            value={dateOfBirth }
                            onChange={handleUpdateChange}
                          />
                        </label>
                      </form> */}

                        {/* <div>
                          <div className="bg-green-500 text-white rounded-md px-8 py-2 text-base font-medium hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300">
                            icon
                          </div>
                          <div className="massage">
                            <p>Thank you </p>
                            <p>Your account has been successfully created. </p>
                          </div>
                          <div className="submit">LETS GO</div>
                        </div> */}

                        <div class="">
                          {/* <!--body--> */}
                          <div class="text-center p-5 flex-auto justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="60"
                              height="60"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="green"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-check-circle items-center mx-auto"
                            >
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                            {/* <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-16 h-16 flex items-center text-red-500 mx-auto"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clip-rule="evenodd"
                              />
                            </svg> */}
                            <h2 class="text-xl font-bold py-4 ">Thank you</h2>
                            <p class="text-md text-gray-500 ">
                              Your account has been created successfully.
                            </p>
                          </div>
                          {/* <!--footer--> */}
                          <div class="p-3  mt-2 text-center space-x-4 md:block">
                            <Link to={"/"}>
                              <button class="w-full text-center bg-blue-700 hover:bg-blue-900 rounded-full text-white py-3 font-medium">
                                LETS GO
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* button */}
                  {/* <div className="text-center md:text-right mt-4 md:flex md:justify-end">
                    <button
                      onClick={handleUpdateSubmit}
                      className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-green-200 text-green-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2"
                    >
                      Login{" "}
                    </button>
                    <button
                      className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4
        md:mt-0 md:order-1"
                      onClick={() => onClose()}
                    >
                      No, cancel
                    </button>
                  </div> */}
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

export default Welcome;
