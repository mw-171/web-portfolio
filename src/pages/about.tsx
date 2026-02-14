import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import { Disclosure, Transition } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import Link from "../components/Link";
import FancyLink from "../components/FancyLink";

export default function About() {
  const experience = [
    {
      title: "Member of Technical Staff",
      date: "Jan 2026 - Present",
      description: (
        <>
          Automating operations at{" "}
          <Link href="https://pointer.ai/">pointer.ai</Link>
        </>
      ),
      company: "Pointer",
    },
    {
      title: "Software Engineer Intern",
      date: "May 2025 - September 2025",
      description: (
        <>
          Supporting local through a{" "}
          <Link href="https://www.faire.com/">wholesale marketplace</Link> 🪴
        </>
      ),
      company: "Faire",
    },
    {
      title: "AI Software Engineer Intern",
      date: "Sept 2024 - May 2025",
      description: "Building the next thing with really cool people :)",
      company: "1851 Labs",
    },
    {
      title: "Frontend Developer Organizer",
      date: "Feb 2024 - Oct 2024",
      description: (
        <>
          Creating the main <Link href="https://hackthenorth.com/">site</Link>{" "}
          and hacker applications for Canada's largest hackathon ⚙️
        </>
      ),
      company: "Hack the North",
    },
    {
      title: "Software Engineer Intern",
      date: "Jan 2024 - May 2024",
      description: (
        <>
          Developing a full-stack{" "}
          <Link href="https://www.immigr8now.com/">tool</Link> that streamlines
          the U.S immigration process.
        </>
      ),
      company: "Immigr8",
    },
    {
      title: "FIRST Robotics Co-Captain",
      date: "Mar 2022 - June 2023",
      description: (
        <>
          Founded and led a{" "}
          <Link href="https://www.instagram.com/bearbellarobotics/?hl=en">
            team
          </Link>{" "}
          of 15 to build a robot from scratch to compete in regional
          competitions.
        </>
      ),
      company: "Bearbella Team 21393",
    },
  ];
  //TODO: make breadcrumb navigator a reusable component w/ prop for current icon and page
  return (
    <div className="h-screen">
      <div className="px-8 md:px-24 lg:px-48 py-24">
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
          </ol>
        </nav>
        <div className="flex justify-center md:gap-0 md:pl-0 md:justify-start items-center pt-8 mx-auto max-w-[650px]">
          <div className="w-full md:flex md:flex-col md:justify-between">
            <div className="flex md:flex-row justify-between">
              <div className="flex flex-row gap-5 w-4/5">
                <div className="hidden md:block w-full h-full">
                  <img
                    src="/me.png"
                    alt="vacation!"
                    className="w-full min-w-[120px] h-full object-cover max-h-[200px]"
                  />
                </div>
                {/* <div className="flex justify-between gap-8"> */}
                <div className="flex items-center">
                  <div className="flex flex-col gap-2">
                    <div className="font-semibold text-3xl">Hi, I'm Megan</div>
                    <div>
                      I'm an engineering student at the{" "}
                      <FancyLink href="https://uwaterloo.ca">
                        University of Waterloo
                      </FancyLink>
                      . In my free time, I love travelling, listening to{" "}
                      <FancyLink href="https://open.spotify.com/user/31sqpb6alkzs7qb2outw332i7rmi?si=9ab69246ea704ccb">
                        music
                      </FancyLink>
                      , and creating{" "}
                      <FancyLink href="/portfolio">art</FancyLink>. I am also an
                      avid puzzle builder!
                    </div>
                    <div className="flex justify-start items-center">
                      <div className="text-gray-400 hdmmdidden md:block pb-1">
                        {" "}
                        ------8&lt;--------[{" "}
                        <a
                          href="/me" //link to a cool page
                          className="hover:border-b-2 hover:border-gray-300 scissor-cursor"
                        >
                          cut here
                        </a>{" "}
                        ]--------{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* TODO: make this a reusable component? */}
              <div className="flex flex-col items-end gap-1 md:pt-12 md:pt-0">
                <div>
                  <Link href="https://www.linkedin.com/in/megan-bx-wu/">
                    Linkedin
                  </Link>
                </div>
                <div>
                  <Link href="https://github.com/mw-171">Github</Link>
                </div>
                <div>
                  <Link href="mailto:m56wu@uwaterloo.ca">Email</Link>
                </div>
              </div>
              {/* </div> */}
              {/* TODO: add somethng on bottom of about (drawing?) */}
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-[650px] pt-4 pb-8">
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
                            <MinusIcon
                              className="h-5 w-5 hover:text-gray-400"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusIcon
                              className="h-5 w-5 hover:text-gray-400"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <dt className="text-gray-500">{experience.date}</dt>

                    <Transition
                      enter="transition-all duration-200 ease-out"
                      enterFrom="max-h-0 opacity-0"
                      enterTo="max-h-96 opacity-100"
                      leave="transition-all duration-150 ease-in"
                      leaveFrom="max-h-96 opacity-100"
                      leaveTo="max-h-0 opacity-0"
                    >
                      {" "}
                      <Disclosure.Panel as="dd" className="pt-2 pr-12">
                        <p className="text-base leading-7 text-gray-600">
                          {experience.description}
                        </p>
                      </Disclosure.Panel>
                    </Transition>
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

