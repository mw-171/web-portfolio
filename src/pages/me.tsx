// import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useState } from "react";

export default function Me() {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    return () => {
      setVisible(false);
    };
  }, []);

  return (
    <>
      <div className="relative">
        <div className="z-0 absolute top-[220px] left-[370px] animate-pulse">
          <img
            src="/10.png"
            alt="blue star"
            style={{ width: "20%", height: "auto", opacity: 1.5 }}
          />
        </div>
        <div className="z-0 absolute top-[100px] left-[900px] animate-pulse">
          <img
            src="/9.png"
            alt="purple stars"
            style={{ width: "30%", height: "auto", opacity: 1.0 }}
          />
        </div>
        <div className="z-0 absolute top-[320px] left-[850px] animate-pulse">
          <img
            src="/8.png"
            alt="light blue stars"
            style={{ width: "30%", height: "auto", opacity: 1.0 }}
          />
        </div>
      </div>
      <div className="py-64 flex items-center justify-center flex-col ">
        <div
          className={`text-4xl text-gray-700 font-semibold z-20 transition-opacity duration-150000 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          hi there!
        </div>
        <div
          className={`pt-4 text-gray-700 transition-opacity duration-150000 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          you've discovered a cool easter egg! (wip xD)
        </div>
      </div>
    </>
  );
}
