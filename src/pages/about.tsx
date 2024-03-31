import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

export default function About() {
  return (
    <div className="h-screen bg-purple-50">
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
            <div className="flex justify-between gap-24">
              <Image
                src="/me.png" // Path to your image
                alt="me on vaca"
                width={300}
                height={400}
              />
              <div className="flex flex-col gap-2">
                <div className="font-semibold text-3xl">Megan</div>
                <div>she/her</div>
                <div>passionate artist!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* TODO: decide if necessary, more detailed summary/intro maybe? */}
    </div>
  );
}
