import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import Footer from "../components/footer";
import Image from "next/image";
import { images } from "../lib/art";

export default function Portfolio() {
  const imagesPerColumn = Math.ceil(images.length / 4);

  return (
    <div
      className="min-h-screen bg-cover bg-center overflow-auto"
      // style={{ backgroundImage: "url('/test.jpg')" }}
    >
      <div className="px-8 md:px-24 lg:px-48 py-24">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-4 pb-8 pl-4">
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
                  href={"/art"}
                  className="ml-4 text-md font-medium text-gray-500 hover:text-gray-700"
                >
                  art
                </a>
              </div>
            </li>
          </ol>
        </nav>
        <div className="flex justify-center items-center  pb-8 ">
          <span>
            a collection of{" "}
            <span className="serif-font italic">
              <a
                href="https://www.instagram.com/m.117.w/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:border-b-2 hover:border-gray-300"
              >
                art
              </a>
            </span>
          </span>
        </div>
        <div className="flex flex-wrap">
          {[...Array(4)].map((_, columnIndex) => (
            <div key={columnIndex} className="w-1/2  md:w-1/3 lg:w-1/4 px-4">
              {images
                .slice(
                  columnIndex * imagesPerColumn,
                  (columnIndex + 1) * imagesPerColumn,
                )
                .map((image, index) => (
                  <div
                    key={index}
                    className="mb-4 relative active:bg-black active:rounded-md"
                  >
                    <a
                      href={`/art/${encodeURIComponent(image.title || "untitled")}`}
                    >
                      <Image // Replaced img with next/image
                        src={image.src}
                        alt={image.alt}
                        width={500} // You can adjust this
                        height={300} // You can adjust this
                        className="w-full h-auto rounded shadow-md active:opacity-60 active:rounded-md"
                      />
                      <div className="absolute inset-0 flex items-center rounded-md justify-center opacity-0 hover:rounded-md hover:opacity-100 transition-opacity duration-300 bg-gray-800 bg-opacity-65 text-white text-center">
                        {image.title}
                      </div>
                    </a>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

