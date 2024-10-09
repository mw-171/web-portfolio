"use client";

// import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useState } from "react";
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
      <div className="relative">
        <div className="z-0 absolute top-[220px] left-[200px] md:left-[280px] animate-pulse">
          <img
            src="/10.png"
            alt="light blue star"
            style={{ width: "15%", height: "auto", opacity: 1.5 }}
          />
        </div>
        <div className="z-0 absolute top-[200px] left-[700px] md:left-[900px] animate-pulse">
          <img
            src="/9.png"
            alt="purple stars"
            style={{ width: "28%", height: "auto", opacity: 1.0 }}
          />
        </div>
        <div className="z-0 absolute top-[340px] left-[550px] md:left-[650px] animate-pulse">
          <img
            src="/8.png"
            alt="blue stars"
            style={{ width: "20%", height: "auto", opacity: 2.0 }}
          />
        </div>
      </div>
      <div className="py-64">
        <div className=" px-8 md:px-64 flex justify-center flex-col ">
          <div className="flex items-center justify-center flex-col ">
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
          <div className="pt-16 md:pt-48 flex items-start justify-center flex-col">
            <div className="text-3xl text-gray-700 font-semibold z-20">
              a peek into my daily life!
            </div>
            <div className="pt-8">
              <div className="rounded-md flex flex-col antialiased">
                {/* <InfiniteMovingCards images={images} speed="normal" /> */}
              </div>

              {/* <div className="flex justify-center space-x-2">
              {images.map((image, index) => (
                <HoverImage
                  key={index}
                  initialSrc={image.initialSrc}
                  hoverSrc={image.hoverSrc}
                  alt={image.alt}
                />
              ))} */}
            </div>
          </div>
        </div>
        <div className="h-[25rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            images={images}
            direction="right"
            speed="normal"
          />
          {/* <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          /> */}
        </div>
      </div>
    </>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

