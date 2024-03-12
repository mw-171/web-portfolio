import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";

export default function Projects() {
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
                  href={"/projects"}
                  className="ml-4 text-md font-medium text-gray-500 hover:text-gray-700"
                >
                  projects
                </a>
              </div>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}
