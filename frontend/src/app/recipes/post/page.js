"use client";
import "../recipes.css";
import { setConfig } from "next/config";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function page() {
  const [userData, setUserData] = useState([]);

  const [editingIndex, setEditingIndex] = useState(null);
  const inputRefs = useRef([]);
  const [items, setItems] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const [IGTS_editingIndex, setIGTS_editingIndex] = useState(null);
  const [IGTS, setIGTS] = useState([]);
  const IGTS_inputRefs = useRef([]);
  const [IGTShoveredIndex, setIGTSHoveredIndex] = useState(null);

  const [DIRN_editingIndex, setDIRN_editingIndex] = useState(null);
  const [DIRN, setDIRN] = useState([]);
  const DIRN_inputRefs = useRef([]);
  const [DIRNhoveredIndex, setDIRNHoveredIndex] = useState(null);

  const pressNewIngredient = () => {
    setIGTS([...IGTS, { id: Date.now(), text: "" }]);
    setIGTS_editingIndex(IGTS.length);
  };

  const pressNewDirection = () => {
    setDIRN([...DIRN, { id: Date.now(), text: "" }]);
    setDIRN_editingIndex(DIRN.length);
  };

  const handleInputChange = (index, event, trgt) => {
    let newItems;
    if (trgt === "directions") {
      newItems = [...DIRN];
      newItems[index].text = event.target.value;
      setDIRN(newItems);
    } else if (trgt === "ingredients") {
      newItems = [...IGTS];
      newItems[index].text = event.target.value;
      setIGTS(newItems);
    }
  };

  const handleBlur = (index, trgt) => {
    if (trgt === "directions") {
      setDIRN_editingIndex(null);
    } else if (trgt === "ingredients") {
      setIGTS_editingIndex(null);
    }
  };

  const handleKeyDown = (index, event, trgt) => {
    if (event.key === "Enter") {
      if (trgt === "directions") {
        setDIRN_editingIndex(null);
      } else if (trgt === "ingredients") {
        setIGTS_editingIndex(null);
      }
    }
  };

  const handleTextClick = (index, trgt) => {
    if (trgt === "directions") {
      setDIRN_editingIndex(index);
    } else if (trgt === "ingredients") {
      setIGTS_editingIndex(index);
    }
  };

  const handleMouseEnter = (index, trgt) => {
    if (trgt === "directions") {
      setDIRNHoveredIndex(index);
    } else if (trgt === "ingredients") {
      setIGTSHoveredIndex(index);
    }
  };

  const handleMouseLeave = () => {
    setIGTSHoveredIndex(null);
    setDIRNHoveredIndex(null);
  };

  const handleDeleteItem = (index, trgt) => {
    let newItems;
    if (trgt === "directions") {
      newItems = DIRN.filter((_, i) => i !== index);
      setDIRN(newItems);
      if (DIRN_editingIndex === index) {
        setDIRN_editingIndex(null);
      }
      if (DIRNhoveredIndex === index) {
        setDIRNHoveredIndex(null);
      }
    } else if (trgt === "ingredients") {
      newItems = IGTS.filter((_, i) => i !== index);
      setIGTS(newItems);
      if (IGTS_editingIndex === index) {
        setIGTS_editingIndex(null);
      }
      if (IGTShoveredIndex === index) {
        setIGTSHoveredIndex(null);
      }
    }
  };

  useEffect(() => {
    if (
      IGTS_editingIndex !== null &&
      IGTS_inputRefs.current[IGTS_editingIndex]
    ) {
      IGTS_inputRefs.current[IGTS_editingIndex].focus();
    }
    if (
      DIRN_editingIndex !== null &&
      DIRN_inputRefs.current[DIRN_editingIndex]
    ) {
      DIRN_inputRefs.current[DIRN_editingIndex].focus();
    }
  }, [IGTS_editingIndex, DIRN_editingIndex]);

  const handleClickOutside = (event) => {
    if (DIRN_editingIndex !== null) {
      const isClickInsideInput = DIRN_inputRefs.current.some((ref) =>
        ref?.contains(event.target)
      );
      if (!isClickInsideInput) {
        setDIRN_editingIndex(null);
      }
    }

    if (IGTS_editingIndex !== null) {
      const isClickInsideInput = IGTS_inputRefs.current.some((ref) =>
        ref?.contains(event.target)
      );
      if (!isClickInsideInput) {
        setIGTS_editingIndex(null);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [IGTS_editingIndex, DIRN_editingIndex]);

  return (
    <main className="flex pt-15 justify-center flex-col w-full items-center">
      <form>
        <section className="flex flex-col justify-center mt-15">
          <div className="flex gap-10">
            <div className="flex flex-col">
              <span className="text-4xl font-bold">Post your recipe</span>
              <div className="flex flex-col mt-5">
                <span className="font-bold">Keep in mind for photos:</span>
                <span className="text-gray-500">
                  Accepted photo formats include .jpg .jpeg and .png
                </span>
                <span className="text-gray-500">
                  File size should be less than 15MB.
                </span>
              </div>
            </div>
            <div className="inline-block h-auto min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10"></div>
            <div className=" w-100 bg-white rounded">
              <label
                htmlFor="recipe"
                className="mb-2 flex font-bold text-gray-800 text-sm"
              >
                Recipe name
              </label>
              <input
                className="appearance-none border border-gray-400 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="recipe"
                name="recipe"
                type="text"
                placeholder="Recipe"
                autoComplete="off"
              />
              <div className="flex items-center justify-center w-full mt-5">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
            </div>
          </div>
          <div className="flex mt-5 flex-col">
            <div className="flex flex-col w-full">
              <label
                htmlFor="description"
                className="mb-2 flex font-bold text-gray-800 text-sm"
              >
                Add a description
              </label>
              <textarea
                className="appearance-none border border-gray-400 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                name="description"
                type="text"
                placeholder="Text here"
                autoComplete="off"
                rows="4"
                maxLength="200"
              />
            </div>
            <div className="flex flex-row gap-5 mt-5">
              <div className="flex flex-col w-full">
                <span className="font-bold">Directions</span>
                <div>
                  {DIRN.map((item, index) => (
                    <div
                      key={item.id}
                      className="mb-1 relative flex items-center mt-2"
                    >
                      {DIRN_editingIndex === index ? (
                        <input
                          type="text"
                          value={item.text}
                          onChange={(e) =>
                            handleInputChange(index, e, "directions")
                          }
                          onBlur={() => handleBlur(index, "directions")}
                          onKeyDown={(e) =>
                            handleKeyDown(index, e, "directions")
                          }
                          ref={(el) => (DIRN_inputRefs.current[index] = el)}
                          className="border rounded p-1 w-full"
                        />
                      ) : (
                        <>
                          <span
                            onClick={() => handleTextClick(index, "directions")}
                            onMouseEnter={() =>
                              handleMouseEnter(index, "directions")
                            }
                            onMouseLeave={handleMouseLeave}
                            className="cursor-pointer flex-grow"
                          >
                            {item.text || "Click to edit"}
                          </span>
                          <button
                            onClick={() =>
                              handleDeleteItem(index, "directions")
                            }
                            className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </div>
                  ))}
                </div>
                <div className="w-full flex flex-col mt-2">
                  <div
                    className="flex w-full items-center gap-2 cursor-pointer hover:underline"
                    onClick={pressNewDirection}
                  >
                    <svg
                      height="20px"
                      width="20px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          className="fill-blue-500"
                          d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44771 13 8V11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H13V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V13H8C7.44772 13 7 12.5523 7 12C7 11.4477 7.44771 11 8 11H11V8Z"
                        ></path>{" "}
                        <path
                          className="fill-blue-500"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M23 4C23 2.34315 21.6569 1 20 1H4C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V4ZM21 4C21 3.44772 20.5523 3 20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4Z"
                        ></path>{" "}
                      </g>
                    </svg>
                    <span>Add direction</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full">
                <span className="font-bold">Ingredients</span>
                <div>
                  {IGTS.map((item, index) => (
                    <div
                      key={item.id}
                      className="mb-1 relative flex items-center mt-2"
                    >
                      {IGTS_editingIndex === index ? (
                        <input
                          type="text"
                          value={item.text}
                          onChange={(e) =>
                            handleInputChange(index, e, "ingredients")
                          }
                          onBlur={() => handleBlur(index, "ingredients")}
                          onKeyDown={(e) =>
                            handleKeyDown(index, e, "ingredients")
                          }
                          ref={(el) => (IGTS_inputRefs.current[index] = el)}
                          className="border rounded p-1 w-full"
                        />
                      ) : (
                        <>
                          <span
                            onClick={() =>
                              handleTextClick(index, "ingredients")
                            }
                            onMouseEnter={() =>
                              handleMouseEnter(index, "ingredients")
                            }
                            onMouseLeave={handleMouseLeave}
                            className="cursor-pointer flex-grow"
                          >
                            {item.text || "Click to edit"}
                          </span>
                          <button
                            onClick={() =>
                              handleDeleteItem(index, "ingredients")
                            }
                            className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </div>
                  ))}
                </div>
                <div className="w-full flex flex-col mt-2">
                  <div
                    className="flex w-full items-center gap-2 cursor-pointer hover:underline"
                    onClick={pressNewIngredient}
                  >
                    <svg
                      height="20px"
                      width="20px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          className="fill-blue-500"
                          d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44771 13 8V11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H13V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V13H8C7.44772 13 7 12.5523 7 12C7 11.4477 7.44771 11 8 11H11V8Z"
                        ></path>{" "}
                        <path
                          className="fill-blue-500"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M23 4C23 2.34315 21.6569 1 20 1H4C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V4ZM21 4C21 3.44772 20.5523 3 20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4Z"
                        ></path>{" "}
                      </g>
                    </svg>
                    <span>Add ingredient</span>
                  </div>
                </div>
              </div>
            </div>
            <hr className="border-slate-200 mt-5" />
            <div className="flex flex-row gap-5 mt-5">
              <div className="flex flex-row w-full justify-between">
                <div className="flex flex-col gap-2">
                  <span className="font-bold">Cooking Time</span>
                  <div className="flex flex-row gap-3">
                    <div className="flex flex-col w-22">
                      <input
                        type="number"
                        id="number-input"
                        aria-describedby="helper-text-explanation"
                        className="hide-spin-buttons text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        min="0"
                        max="59"
                        required
                      />
                      <label
                        htmlFor="number-input"
                        className="text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Hours
                      </label>
                    </div>

                    <div className="flex flex-col w-22">
                      <input
                        type="number"
                        id="number-input"
                        aria-describedby="helper-text-explanation"
                        className="hide-spin-buttons text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                      <label
                        htmlFor="number-input"
                        className="text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Mins
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-bold">Preperation Time</span>
                  <div className="flex flex-row gap-3">
                    <div className="flex flex-col w-22">
                      <input
                        type="number"
                        id="number-input"
                        aria-describedby="helper-text-explanation"
                        className="hide-spin-buttons text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                      <label
                        htmlFor="number-input"
                        className="text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Hours
                      </label>
                    </div>

                    <div className="flex flex-col w-22">
                      <input
                        type="number"
                        id="number-input"
                        aria-describedby="helper-text-explanation"
                        className="hide-spin-buttons text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                      <label
                        htmlFor="number-input"
                        className="text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Mins
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row w-full justify-end">
                <div className="flex flex-col gap-2">
                  <span className="font-bold">Servings</span>
                  <div className="flex flex-row gap-3">
                    <div className="flex flex-col w-22">
                      <input
                        type="number"
                        id="number-input"
                        aria-describedby="helper-text-explanation"
                        className="hide-spin-buttons text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex my-5 justify-center">
            <div className="flex gap-3">
              <button className="py-2 px-5 bg-gray-200 hover:bg-gray-300 text-black font-bold rounded transition delay-50 rounded-3xl">
                Discard
              </button>
              <button className="py-2 px-5 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded transition delay-50 rounded-3xl">
                Post recipe
              </button>
            </div>
          </div>
        </section>
      </form>
    </main>
  );
}
