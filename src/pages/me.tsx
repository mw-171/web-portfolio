"use client";

import { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
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
  //TODO: add grid of videos/bereals/travel photos
  return (
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
        <Breadcrumb
          items={[
            { label: "about", href: "/about" },
            { label: "details!", href: "/me" },
          ]}
          listClassName="md:pl-4"
        />

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

