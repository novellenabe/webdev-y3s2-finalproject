"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function page() {
  const [userData, setUserData] = useState([]);

  return (
    <main className="flex pt-15 justify-center flex-col bg-white w-full">
      <section className="flex flex-col items-center">
        <div className="flex flex-col text-center gap-3 w-auto min-[1295px]:w-320">
          <img
            src="profile-bg-0.jpg"
            alt="profile-bg"
            className="rounded-b-lg"
          />
        </div>
      </section>
      <section className="flex flex-col mx-2 items-center relative">
        <div className="flex flex-col items-center md:items-start md:flex-row gap-3 w-full bg-white px-6 min-[1265px]:w-310">
          <img
            src="default-pfp.jpeg"
            alt="default-pfp"
            className="block rounded-full w-30 h-30 absolute -top-15 md:-top-10 border-4 border-white"
          />
          <div className="flex h-10 w-30"></div>
          <div className="flex flex-col text-center md:text-start justify-center my-3 md:mr-auto">
            <span className="text-2xl font-bold">Albert Novell Enabe</span>
            <span className="text-slate-500">2 recipes</span>
          </div>
          <div className="flex md:my-5">
            <button className="bg-slate-200 rounded px-3 py-1 flex flex-row items-center gap-2 cursor-pointer hover:bg-slate-300">
              <svg
                height="20px"
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
                    d="M17.0671 2.27157C17.5 2.09228 17.9639 2 18.4324 2C18.9009 2 19.3648 2.09228 19.7977 2.27157C20.2305 2.45086 20.6238 2.71365 20.9551 3.04493C21.2864 3.37621 21.5492 3.7695 21.7285 4.20235C21.9077 4.63519 22 5.09911 22 5.56761C22 6.03611 21.9077 6.50003 21.7285 6.93288C21.5492 7.36572 21.2864 7.75901 20.9551 8.09029L20.4369 8.60845L15.3916 3.56308L15.9097 3.04493C16.241 2.71365 16.6343 2.45086 17.0671 2.27157Z"
                    fill="#000000"
                  ></path>{" "}
                  <path
                    d="M13.9774 4.9773L3.6546 15.3001C3.53154 15.4231 3.44273 15.5762 3.39694 15.7441L2.03526 20.7369C1.94084 21.0831 2.03917 21.4534 2.29292 21.7071C2.54667 21.9609 2.91693 22.0592 3.26314 21.9648L8.25597 20.6031C8.42387 20.5573 8.57691 20.4685 8.69996 20.3454L19.0227 10.0227L13.9774 4.9773Z"
                    fill="#000000"
                  ></path>{" "}
                </g>
              </svg>
              <span>Edit Profile</span>
            </button>
          </div>
        </div>
      </section>

      <section className="flex flex-col mt-5 md:mt-5 mx-2 items-center">
        <div className="flex flex-col w-full bg-white px-6 min-[1265px]:w-310">
          <hr className="border-slate-200" />
          <ul className="flex w-50 mt-1">
            <li className="w-1/2 border-b-4 border-blue-600">
              <button className="bg-red w-full py-2 text-blue-600 font-semibold">
                Posts
              </button>
            </li>
            <li className="w-1/2">
              <button className="bg-red w-full py-2 hover:bg-slate-100 text-gray-500 rounded font-semibold">
                Inventory
              </button>
            </li>
          </ul>
        </div>
      </section>

      <section className="flex flex-col mt-5 md:mt-5 px-2 items-center bg-zinc-100">
        <hr className="border-slate-200" />
        <div className="flex max-w-310 w-full px-6 my-3 gap-3 md:flex-row flex-col max-w-310 w-full">
          <section className="flex flex-col flex-1 gap-2">
            <div className="flex flex-col w-full bg-white p-5 rounded gap-4">
              <span className="font-bold">Intro</span>
              <div className="flex flex-row gap-2 text-center items-center">
                <svg
                  height="20px"
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
                      d="M3 9H21M17 13.0014L7 13M10.3333 17.0005L7 17M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
                <span>Joined in May 2025</span>
              </div>
            </div>
            <div className="flex flex-col w-full bg-white p-5 rounded gap-4">
              <span className="font-bold">Share your recipes</span>
              <a
                href="recipes/create"
                className="flex flex-row gap-2 text-center items-center cursor-pointer hover:underline"
              >
                <svg
                  height="20px"
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
                    <g id="Edit / Add_Plus_Circle">
                      {" "}
                      <path
                        id="Vector"
                        d="M8 12H12M12 12H16M12 12V16M12 12V8M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <span className="font-bold">Post recipes</span>
              </a>
            </div>
          </section>
          <section className="flex flex-2">
            <div className="w-full bg-white rounded h-fit p-10 flex flex-col text-center justify-center w-fit">
              <span className="font-bold">Fill Out Your Profile</span>
              <span className="text-gray-400">
                Post your recipes to your profile and give everyone a taste of
                your culinary skills.
              </span>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
