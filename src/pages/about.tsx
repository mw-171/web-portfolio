import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function About() {
  const experience = [
    {
      title: "Frontend Developer",
      date: "Mar 2024 - Present",
      description:
        "Building the main site and hacker applications for Canada's largest hackathon.",
      company: "Hack the North",
    },
    {
      title: "Software Developer",
      date: "Jan 2024 - Present",
      description:
        "Developing a full-stack tool that streamlines the U.S immigration process.",
      company: "Immigr8",
    },
    {
      title: "FIRST Robotics Co-Captain",
      date: "Mar 2022 - June 2023",
      description:
        "Led a team of 15 to build a robot from scratch to compete in regional competitions.",
      company: "Team 21393",
    },
  ];
  return (
    <div className="h-screen">
      <div className="px-8 md:px-24 lg:px-48 py-24">
        <nav className="flex" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-4 pb-8 pl-4">
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
          </ol>
        </nav>
        <div className="flex justify-center items-center pt-8">
          <div className="">
            <div className="flex justify-between gap-8 md:gap-24">
              <div>
                <Image
                  src="/me.png" // Path to your image
                  alt="me on vaca"
                  width={300}
                  height={400}
                />
              </div>
              <div className="flex flex-col justify-between">
                {/* <div className="flex justify-between gap-8"> */}
                <div className="flex flex-col gap-2 max-w-[200px]">
                  <div className="font-semibold text-3xl">Megan</div>
                  <div>she/her</div>
                  <div>
                    travel lover,{" "}
                    <a
                      href="https://open.spotify.com/user/31sqpb6alkzs7qb2outw332i7rmi?si=9ab69246ea704ccb"
                      target="_blank"
                      rel="noreferrer"
                      className="serif-font italic hover:border-b-2 hover:border-gray-300"
                    >
                      <span>music</span>
                    </a>{" "}
                    connoisseur, and{" "}
                    <a
                      href="/portfolio"
                      className="serif-font italic hover:border-b-2 hover:border-gray-300"
                    >
                      <span>art</span>
                    </a>{" "}
                    enthusiast
                  </div>
                </div>
                {/* TODO: make this a reusable component? */}
                <div className="flex flex-col gap-1">
                  <div>
                    <a
                      href="https://www.linkedin.com/in/megan-bx-wu/"
                      target="_blank"
                      rel="noreferrer"
                      className="border-b-2 border-gray-300 hover:text-indigo-700 hover:border-indigo-500"
                    >
                      Linkedin
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/mw-171"
                      target="_blank"
                      rel="noreferrer"
                      className="border-b-2 border-gray-300 hover:text-indigo-700 hover:border-indigo-500"
                    >
                      Github
                    </a>
                  </div>
                  <div>
                    <a
                      href="mailto:m56wu@uwaterloo.ca"
                      target="_blank"
                      rel="noreferrer"
                      className="border-b-2 border-gray-300 hover:text-indigo-700 hover:border-indigo-500"
                    >
                      Email
                    </a>
                  </div>
                </div>
                {/* </div> */}
                {/* TODO: add somethng on bottom of about (drawing?) */}
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto md:px-8 lg:px-16 xl:px-64 2xl:px-96 pt-4 pb-8">
          <dl className="space-y-4 divide-y divide-gray-900/10">
            {experience.map((experience) => (
              <Disclosure as="div" key={experience.title} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {experience.title}
                          {"  "}
                          <span className="text-gray-400 font-normal italic pl-2">
                            {experience.company}
                          </span>
                        </span>

                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusIcon className="h-5 w-5" aria-hidden="true" />
                          ) : (
                            <PlusIcon className="h-5 w-5" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <dt className="text-gray-500">{experience.date}</dt>
                    <Disclosure.Panel as="dd" className="pt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">
                        {experience.description}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
      {/* TODO: decide if necessary, more detailed summary/intro maybe? */}
    </div>
  );
}
