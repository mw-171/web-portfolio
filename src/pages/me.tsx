"use client";

// import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useState } from "react";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import { images } from "../lib/bereals";

export default function Me() {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    return () => {
      setVisible(false);
    };
  }, []);
  return (
    //make this page a more about me section - include bereals and travel photos!
    <>
      <div className="hidden md:block relative">
        <div className="z-0 absolute top-[220px] left-[200px] md:left-[280px] animate-pulse">
          <img
            src="/10.png"
            alt="light blue star"
            style={{ width: "15%", height: "auto", opacity: 1.5 }}
          />
        </div>
        <div className="z-0 absolute top-[200px] left-[800px] md:left-[1000px] animate-pulse">
          <img
            src="/9.png"
            alt="purple stars"
            style={{ width: "28%", height: "auto", opacity: 1.0 }}
          />
        </div>
        <div className="z-0 absolute top-[340px] left-[550px] md:left-[850px] animate-pulse">
          <img
            src="/8.png"
            alt="blue stars"
            style={{ width: "20%", height: "auto", opacity: 2.0 }}
          />
        </div>
      </div>
      <div className="pt-24 px-8 md:px-24 lg:px-48 flex justify-center flex-col ">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-4 pb-8  md:pl-4">
            <li>
              <div>
                <a href="/" className="text-gray-400 hover:text-gray-500">
                  <HomeIcon
                    className="h-5 w-5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="sr-only">home</span>
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon
                  className="h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <a
                  href={"/about"}
                  className="ml-4 text-md font-medium text-gray-500 hover:text-gray-700"
                >
                  about
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon
                  className="h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <a
                  href={"/me"}
                  className="ml-4 text-md font-medium text-gray-500 hover:text-gray-700"
                >
                  details!
                </a>
              </div>
            </li>
          </ol>
        </nav>

        <div className="mt-8 sm:mt-16 flex items-center justify-center flex-col ">
          <div
            className={`text-4xl text-center text-gray-700 font-semibold z-20 transition-opacity duration-150000 ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            hi there!
          </div>
          <div
            className={`pt-4 text-gray-700 transition-opacity duration-150000 ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            you've discovered an easter egg 🐣(wip)
          </div>
        </div>
        <div className="pt-12 md:pt-48 flex items-start justify-center flex-col">
          <div className="text-3xl text-gray-700 font-semibold z-20">
            a peek into my daily life!
          </div>
        </div>
      </div>
      <div className="h-[20rem] sm:h-[25rem] mb-8 rounded-md flex flex-col antialiased bg-white  items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards images={images} direction="right" speed="normal" />
      </div>
    </>
  );
}

