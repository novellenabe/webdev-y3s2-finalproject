import "./page.css";

export default function Home() {
	// put javascript here 
  return (
    <>
      <header className="bg-white fixed top-0 w-full z-10">
        <div className="flex justify-between p-4 items-center">
          <div className="flex justify-center block lg:hidden">
            <button className="" id="">
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#CCCCCC"
                  strokeWidth="0.144"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M4 6H20M4 12H20M4 18H20"
                    stroke="#78706a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </button>
          </div>
          <div className="flex text-center gap-10">
            <span className="text-2xl inline-block text-blue-500 font-bold">
              Cullinary Compass
            </span>
          </div>
          <div className="flex justify-center block lg:hidden">
            <button>
              <svg
                width="30px"
                height="30px"
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
                    d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                    stroke="#78706a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </button>
          </div>
          <div className="flex gap-5 hidden lg:block">
            <button className="text-blue-500 hover:text-blue-600 font-bold py-2 px-4 rounded transition delay-50">
              Sign in
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition delay-50">
              Sign up
            </button>
          </div>
        </div>
        <hr className="border-slate-200"></hr>
      </header>
      <main className="flex mt-18 justify-center flex-col bg-gradient-to-b from-white to-cyan-100">
        <section className="flex flex-col mx-2">
          <div className="flex flex-col text-center p-5 gap-3">
            <h1 className="text-4xl font-bold">Dinner Recipes</h1>
            <p className="text-base lg:w-200 lg:mx-auto">
              Need help with dinner ideas? We have one-pot dishes, 30-minute
              meals, slow cooker feasts, and dinner recipes for every mood.
            </p>
          </div>
        </section>
        <section className="flex mx-2 justify-center">
          <div className="flex flex-col lg:flex-row p-3 bg-indigo-100 w-210 rounded-sm">
            <span className="font-bold text-indigo-900 p-1 lg:mr-17 text-center">
              EXPLORE
            </span>
            <div className="flex-wrap flex justify-center lg:justify-start">
              <a
                href="#"
                className="bg-white inline-block px-2 py-1 m-1 rounded-sm font-bold text-indigo-900 text-sm"
              >
                COMFORT FOOD
              </a>
              <a
                href="#"
                className="bg-white inline-block px-2 py-1 m-1 rounded-sm font-bold text-indigo-900 text-sm"
              >
                FAMILY DINNERS
              </a>
              <a
                href="#"
                className="bg-white inline-block px-2 py-1 m-1 rounded-sm font-bold text-indigo-900 text-sm"
              >
                SIDE DISHES
              </a>
              <a
                href="#"
                className="bg-white inline-block px-2 py-1 m-1 rounded-sm font-bold text-indigo-900 text-sm"
              >
                SAUCES
              </a>
              <a
                href="#"
                className="bg-white inline-block px-2 py-1 m-1 rounded-sm font-bold text-indigo-900 text-sm"
              >
                DINNERS BY TYPES
              </a>
              <a
                href="#"
                className="bg-white inline-block px-2 py-1 m-1 rounded-sm font-bold text-indigo-900 text-sm"
              >
                DINNERS BY INGREDIENTS
              </a>
              <a
                href="#"
                className="bg-white inline-block px-2 py-1 m-1 rounded-sm font-bold text-indigo-900 text-sm"
              >
                DINNERS BY DIETS
              </a>
              <a
                href="#"
                className="bg-white inline-block px-2 py-1 m-1 rounded-sm font-bold text-indigo-900 text-sm"
              >
                DINNERS BY TIME AND EASE
              </a>
            </div>
          </div>
        </section>
		
		
		
        <section className="flex mx-2 justify-center mt-10">
          <div className="p-2 grid grid-rows-3 grid-rows-[auto_auto_auto] grid-cols-1 sm:grid-cols-2 sm:grid-rows-[auto_200px_auto] lg:grid-cols-3 lg:grid-rows-2 lg:grid-rows-[250px_250px] gap-3 w-auto lg:w-285">
            <div className="flex h-auto flex-col row-start-1 lg:flex-row sm:row-start-1 sm:col-span-1 lg:col-span-2 lg:row-start-1 bg-gray-200 lg:h-auto sm:flex-col bg-white">
              <img
                src="temp-image.jpg"
                alt="temp-img"
                className="w-auto h-auto"
              />
              <div className="m-4 flex flex-col justify-between flex-grow">
                <div className="flex flex-col gap-3">
                  <strong className="text-sm text-amber-700">DINNERS</strong>
                  <h1 className="text-xl lg:text-2xl font-serif">
                    My Loaded Chicken Breasts Are Ready In 15 Minutes Flat
                  </h1>
                  <strong className="text-sm">COCO MORANTE</strong>
                </div>
                <span className="mt-10 lg:mt-0">20 mins</span>
              </div>
            </div>
            <div className="flex row-start-2 flex-col sm:flex-row sm:col-span-2 lg:flex-col lg:flex-col sm:row-start-2 lg:col-start-3 lg:row-span-2 lg:h-auto bg-gray-200 bg-white">
              <img src="temp-image.jpg" alt="temp-img" className="block" />
              <div className="m-4 flex flex-col justify-between flex-grow">
                <div className="flex flex-col gap-3">
                  <strong className="text-sm text-amber-700">DINNERS</strong>
                  <h1 className="text-xl lg:text-2xl font-serif">
                    The Nostalgic One-Pan Supper My Whole Family Loves
                  </h1>
                  <strong className="text-sm">MICAH SIVA, RD</strong>
                </div>
                <span className="mt-10 lg:mt-0">45 mins</span>
              </div>
            </div>
            <div className="flex row-start-3 flex-col h-auto sm:row-start-1 sm:col-span-1 lg:flex-row lg:col-span-2 lg:row-start-2 bg-gray-200 lg:h-auto flex bg-white">
              <img src="temp-image.jpg" alt="temp-img" />
              <div className="m-4 flex flex-col justify-between flex-grow">
                <div className="flex flex-col gap-3">
                  <strong className="text-sm text-amber-700">DINNERS</strong>
                  <h1 className="text-xl lg:text-2xl font-serif">
                    I Make My 2-Ingredient Caesar Salmon On Busy Weeknights
                  </h1>
                  <strong className="text-sm">MICAH SIVA, RD</strong>
                </div>
                <span className="mt-10 lg:mt-0">20 mins</span>
              </div>
            </div>
          </div>
        </section>
		
        <section className="flex mt-10 flex-col justify-center items-center mx-2">
          <div className="flex flex-col w-285">
            <span className="font-serif text-3xl text-teal-600">Explore Dinners</span>
            <hr className="border-teal-600 mt-3"></hr>
          </div>
		  <div className="grid grid-rows-2 grid-cols-4 grid-cols-[auto_auto_auto_auto] gap-5 lg:w-285"> // FIX THIS HERE
			<div className="flex flex-col row-start-1 col-start-1 bg-white" id="exploreDinners_Card1">
				<div>IMAGE HERE</div>
				<div className="m-4 flex flex-col justify-between flex-grow">
					<div className="flex flex-col gap-3">
					  <strong className="text-xs text-amber-700">DINNERS</strong>
					  <h1 className="text-xl lg:text-2xl font-serif">
						The 3-Ingredient Dinner I Can't Stop Making
					  </h1>
					</div>
				</div>
			</div>
			<div className="flex flex-col row-start-1 col-start-2 bg-white" id="exploreDinners_Card2">
				<div>IMAGE HERE</div>
				<div className="m-4 flex flex-col justify-between flex-grow">
					<div className="flex flex-col gap-3">
					  <strong className="text-xs text-amber-700">DINNERS</strong>
					  <h1 className="text-xl lg:text-2xl font-serif">
						The 3-Ingredient Garlic Butter Chicken Bites I Can't Stop Making
					  </h1>
					</div>
				</div>
			</div>
			<div className="flex flex-col row-start-1 col-start-3 bg-white" id="exploreDinners_Card3"> 
				<div>IMAGE HERE</div>
				<div className="m-4 flex flex-col justify-between flex-grow">
					<div className="flex flex-col gap-3">
					  <strong className="text-xs text-amber-700">DINNERS</strong>
					  <h1 className="text-xl lg:text-2xl font-serif">
						The 5-Minute Meal I Make on Repeat
					  </h1>
					</div>
				</div>
			</div>
			<div className="flex flex-col row-start-1 col-start-4 bg-white" id="exploreDinners_Card4">
				<div>IMAGE HERE</div>
				<div className="m-4 flex flex-col justify-between flex-grow">
					<div className="flex flex-col gap-3">
					  <strong className="text-xs text-amber-700">DINNERS</strong>
					  <h1 className="text-xl lg:text-2xl font-serif">
						The 20-Minute Dinner I Make for Pennies on the Dollar
					  </h1>
					</div>
					<span className="mt-10 lg:mt-0">45 mins</span>
				</div>
			</div>
			<div className="flex flex-col row-start-2 col-start-1 bg-white" id="exploreDinners_Card5">
				<div>IMAGE HERE</div>
				<div className="m-4 flex flex-col justify-between flex-grow">
					<div className="flex flex-col gap-3">
					  <strong className="text-xs text-amber-700">DINNERS</strong>
					  <h1 className="text-xl lg:text-2xl font-serif">
						The 4-Ingredient Chicken Salad I Can't Stop Eating
					  </h1>
					</div>
					<span className="mt-10 lg:mt-0">45 mins</span>
				</div>
			</div>
			<div className="flex flex-col row-start-2 col-start-2 bg-white" id="exploreDinners_Card6">
				<div>IMAGE HERE</div>
				<div className="m-4 flex flex-col justify-between flex-grow">
					<div className="flex flex-col gap-3">
					  <strong className="text-xs text-amber-700">DINNERS</strong>
					  <h1 className="text-xl lg:text-2xl font-serif">
						The 20-Minute Dinner I'm Making All Spring Long
					  </h1>
					</div>
					<span className="mt-10 lg:mt-0">45 mins</span>
				</div>
			</div>
			<div className="flex flex-col row-start-2 col-start-3 bg-white" id="exploreDinners_Card7"> 
				<div>IMAGE HERE</div>
				<div className="m-4 flex flex-col justify-between flex-grow">
					<div className="flex flex-col gap-3">
					  <strong className="text-xs text-amber-700">DINNERS</strong>
					  <h1 className="text-xl lg:text-2xl font-serif">
						My Grandma Judy's Matzo Ball Soup Tastes Like Home
					  </h1>
					</div>
					<span className="mt-10 lg:mt-0">45 mins</span>
				</div>
			</div>
			<div className="flex flex-col row-start-2 col-start-4 bg-white" id="exploreDinners_Card8">
				<div>IMAGE HERE</div>
				<div className="m-4 flex flex-col justify-between flex-grow">
					<div className="flex flex-col gap-3">
					  <strong className="text-xs text text-amber-700">DINNERS</strong>
					  <h1 className="text-xl lg:text-2xl font-serif">
						The Dish My Mom Makes for Passover Every Year (It's My Favorite)
					  </h1>
					</div>
					<span className="mt-10 lg:mt-0">45 mins</span>
				</div>
			</div>
		  </div>
        </section>
      </main>
      <footer>FOOTER_ UPDATES HERE MADE</footer>
    </>
  );
}
