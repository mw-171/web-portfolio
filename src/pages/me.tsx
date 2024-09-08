// import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useState } from "react";

interface ImageData {
  initialSrc: string;
  hoverSrc: string;
  alt: string;
}

const images: ImageData[] = [
  {
    initialSrc: "/bereal/class.JPG",
    hoverSrc: "/bereal/class1.JPG",
    alt: "Image 1",
  },
  {
    initialSrc: "/bereal/asg1.JPG",
    hoverSrc: "/bereal/asg.JPG",
    alt: "Image 2",
  },
  {
    initialSrc: "/bereal/ionfield1.JPG",
    hoverSrc: "/bereal/ionfield.JPG",
    alt: "Image 3",
  },
];

const HoverImage: React.FC<ImageData> = ({ initialSrc, hoverSrc, alt }) => {
  return (
    <div className="relative w-1/8 ">
      <img
        src={initialSrc}
        alt={alt}
        className="w-full rounded-2xl border-2 border-black transition duration-300 ease-in-out hover:opacity-0"
      />
      <img
        src={hoverSrc}
        alt={alt}
        className="w-full rounded-2xl border-2 border-black transition duration-300 ease-in-out opacity-0 hover:opacity-100 absolute top-0 left-0"
      />
    </div>
  );
};

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
      <div className="relative">
        <div className="z-0 absolute top-[220px] left-[370px] animate-pulse">
          <img
            src="/10.png"
            alt="blue star"
            style={{ width: "20%", height: "auto", opacity: 1.5 }}
          />
        </div>
        <div className="z-0 absolute top-[100px] left-[800px] animate-pulse">
          <img
            src="/9.png"
            alt="purple stars"
            style={{ width: "30%", height: "auto", opacity: 1.0 }}
          />
        </div>
        <div className="z-0 absolute top-[320px] left-[900px] animate-pulse">
          <img
            src="/8.png"
            alt="light blue stars"
            style={{ width: "30%", height: "auto", opacity: 2.0 }}
          />
        </div>
      </div>
      <div className="py-64 px-64 flex justify-center flex-col ">
        <div className="flex items-center justify-center flex-col ">
          <div
            className={`text-4xl text-gray-700 font-semibold z-20 transition-opacity duration-150000 ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            hi there!
          </div>
          <div
            className={`pt-4 text-gray-700 transition-opacity duration-150000 ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            you've discovered an easter egg 🐣(wip)
          </div>
        </div>
        <div className="pt-48 flex items-start justify-center flex-col">
          <div className="text-3xl text-gray-700 font-semibold z-20">
            a peek into my daily life!
          </div>
          <div className="pt-8">
            <div className="flex justify-center space-x-2">
              {images.map((image, index) => (
                <HoverImage
                  key={index}
                  initialSrc={image.initialSrc}
                  hoverSrc={image.hoverSrc}
                  alt={image.alt}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

