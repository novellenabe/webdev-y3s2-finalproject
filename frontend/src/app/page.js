"use client";
import "./page.css";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import React, { useState, useEffect } from "react";

export default function Home() {
  /*
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/posts");
        if (!response.ok) {
          // Added error handling
          throw new Error(
            `Failed to fetch posts: ${response.status} ${response.statusText}`
          );
        }
        const data = await response.json();
        setPosts(data);
        console.log(data);
      } catch (error) {
        // Type assertion for error
        console.error("Error fetching posts:", error); // Changed to console.error
      }
    };

    fetchData();
  }, []);*/

  return (
    <main className="flex pt-15 justify-center flex-col bg-gradient-to-b from-white to-blue-50">
      <section className="flex flex-col mx-2 mt-10">
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
        <div className="p-2 grid grid-rows-3 grid-rows-[auto_auto_auto] grid-cols-1 sm:grid-cols-2 sm:grid-rows-[auto_250px_auto] lg:grid-cols-3 lg:grid-rows-2 lg:grid-rows-[250px_250px] gap-3 w-auto lg:w-320">
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
      <section className="mx-2 justify-center mt-10 flex flex-col items-center">
        <div className="flex flex-col max-w-320 w-full p-2">
          <span className="font-serif text-3xl text-blue-900">
            Explore Dinners
          </span>
          <hr className="border-blue-900 my-3" />
        </div>
        <div className="grid grid-cols-2 lg:grid-rows-2 lg:grid-cols-4 gap-5 max-w-320 w-full p-2">
          <div
            className="flex flex-col lg:row-start-1 lg:col-start-1 bg-white overflow-hidden"
            id="exploreDinners_Card1"
          >
            <img src="card-image--.jpg" alt="card-image" className="block" />
            <div className="m-4 flex flex-col justify-between flex-grow">
              <div className="flex flex-col gap-3">
                <strong className="text-xs text-amber-700">DINNERS</strong>
                <h1 className="text-xl lg:text-2xl font-serif">
                  The 3-Ingredient Dinner I Can't Stop Making
                </h1>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col lg:row-start-1 lg:col-start-2 bg-white overflow-hidden"
            id="exploreDinners_Card2"
          >
            <img src="card-image--.jpg" alt="card-image" className="block" />
            <div className="m-4 flex flex-col justify-between flex-grow">
              <div className="flex flex-col gap-3">
                <strong className="text-xs text-amber-700">DINNERS</strong>
                <h1 className="text-xl lg:text-2xl font-serif">
                  The 3-Ingredient Garlic Butter Chicken Bites I Can't Stop
                  Making
                </h1>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col lg:row-start-1 lg:col-start-3 bg-white overflow-hidden"
            id="exploreDinners_Card3"
          >
            <img src="card-image--.jpg" alt="card-image" className="block" />
            <div className="m-4 flex flex-col justify-between flex-grow">
              <div className="flex flex-col gap-3">
                <strong className="text-xs text-amber-700">DINNERS</strong>
                <h1 className="text-xl lg:text-2xl font-serif">
                  The 5-Minute Meal I Make on Repeat
                </h1>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col lg:row-start-1 lg:col-start-4 bg-white overflow-hidden"
            id="exploreDinners_Card4"
          >
            <img src="card-image--.jpg" alt="card-image" className="block" />
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
          <div
            className="flex flex-col lg:row-start-2 lg:col-start-1 bg-white overflow-hidden"
            id="exploreDinners_Card5"
          >
            <img src="card-image--.jpg" alt="card-image" className="block" />
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
          <div
            className="flex flex-col lg:row-start-2 lg:col-start-2 bg-white overflow-hidden"
            id="exploreDinners_Card6"
          >
            <img src="card-image--.jpg" alt="card-image" className="block" />
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
          <div
            className="flex flex-col lg:row-start-2 lg:col-start-3 bg-white overflow-hidden"
            id="exploreDinners_Card7"
          >
            <img src="card-image--.jpg" alt="card-image" className="block" />
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
          <div
            className="flex flex-col lg:row-start-2 lg:col-start-4 bg-white overflow-hidden"
            id="exploreDinners_Card8"
          >
            <img src="card-image--.jpg" alt="card-image" className="block" />
            <div className="m-4 flex flex-col justify-between flex-grow">
              <div className="flex flex-col gap-3">
                <strong className="text-xs text text-amber-700">DINNERS</strong>
                <h1 className="text-xl lg:text-2xl font-serif">
                  The Dish My Mom Makes for Passover Every Year (It's My
                  Favorite)
                </h1>
              </div>
              <span className="mt-10 lg:mt-0">45 mins</span>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-2 justify-center my-25 flex flex-col items-center">
        <div className="flex flex-col max-w-320 w-full p-2 items-center">
          <span className="font-serif text-3xl text-slate-700 mb-5">
            More In Recipes
          </span>
        </div>
        <div className="flex-wrap flex justify-center max-w-320 w-full gap-2">
          <a
            href="#"
            className="bg-white inline-block px-3 py-2 m-1 rounded-sm font-bold text-indigo-900 text-sm"
          >
            LUNCHES
          </a>
          <a
            href="#"
            className="bg-white inline-block px-3 py-2 m-1 rounded-sm font-bold text-indigo-900 text-sm"
          >
            DESSERTS
          </a>
          <a
            href="#"
            className="bg-white inline-block px-3 py-2 m-1 rounded-sm font-bold text-indigo-900 text-sm"
          >
            SNACKS AND APPETIZERS
          </a>
          <a
            href="#"
            className="bg-white inline-block px-3 py-2 m-1 rounded-sm font-bold text-indigo-900 text-sm"
          >
            DRINKS
          </a>
          <a
            href="#"
            className="bg-white inline-block px-3 py-2 m-1 rounded-sm font-bold text-indigo-900 text-sm"
          >
            HOLIDAYS AND SEASONS
          </a>
          <a
            href="#"
            className="bg-white inline-block px-3 py-2 m-1 rounded-sm font-bold text-indigo-900 text-sm"
          >
            RECIPES BY INGREDIENTS
          </a>
          <a
            href="#"
            className="bg-white inline-block px-3 py-2 m-1 rounded-sm font-bold text-indigo-900 text-sm"
          >
            RECIPES BY METHOD
          </a>
          <a
            href="#"
            className="bg-white inline-block px-3 py-2 m-1 rounded-sm font-bold text-indigo-900 text-sm"
          >
            RECIPES BY DIET
          </a>
          <a
            href="#"
            className="bg-white inline-block px-3 py-2 m-1 rounded-sm font-bold text-indigo-900 text-sm"
          >
            RECIPES BY TIME AND EASE
          </a>
          <a
            href="#"
            className="bg-white inline-block px-3 py-2 m-1 rounded-sm font-bold text-indigo-900 text-sm"
          >
            RECIPES BY WORLD CUISINE
          </a>
          <a
            href="#"
            className="bg-white inline-block px-3 py-2 m-1 rounded-sm font-bold text-indigo-900 text-sm"
          >
            MOST RECENT
          </a>
        </div>
      </section>
    </main>
  );
}
