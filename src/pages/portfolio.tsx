//TODO: make everything look cooler, rounded edges, slight shadow, hover effect and click into component, etc.
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
export default function Portfolio() {
  const images = [
    { src: "/art/blue.jpeg", alt: "hey", title: "butterflies" }, //TODO: add titles and hrefs for all so they can be linked to their individual places
    { src: "/art//uncle.jpg", alt: "hey", title: "uncle" },
    { src: "/art/gold.jpeg", alt: "hey", title: "gold" },
    { src: "/art/red.jpeg", alt: "hey", title: "red" },
    { src: "/art/red.jpeg", alt: "hey", title: "uncle" },
    { src: "/art/csmbg1.jpg", alt: "hey", title: "chainsawman" },
    { src: "/art/gold.jpeg", alt: "hey", title: "uncle" },
    { src: "/art/blue.jpeg", alt: "hey", title: "uncle" },
    { src: "/art/gold.jpeg", alt: "hey", title: "uncle" },
    { src: "/art/gold.jpeg", alt: "hey", title: "uncle" },
    { src: "/art/gold.jpeg", alt: "hey", title: "uncle" },
  ];

  const imagesPerColumn = Math.ceil(images.length / 4);

  return (
    <div
      className="min-h-screen bg-cover bg-center overflow-auto"
      // style={{ backgroundImage: "url('/test.jpg')" }}
    >
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
                  href={"/portfolio"}
                  className="ml-4 text-md font-medium text-gray-500 hover:text-gray-700"
                >
                  portfolio
                </a>
              </div>
            </li>
          </ol>
        </nav>
        <Link href={"/portfolio/butterflies"}>
          <div className=" h-6 justify-start items-center flex">
            <button className="relative text-gray-500 hover:text-gray-950 text-base font-medium leading-normal whitespace-nowrap">
              check
            </button>
          </div>
        </Link>
        <div className="flex flex-wrap">
          {[...Array(4)].map((_, columnIndex) => (
            <div key={columnIndex} className="w-1/2  md:w-1/3 lg:w-1/4 px-4">
              {images
                .slice(
                  columnIndex * imagesPerColumn,
                  (columnIndex + 1) * imagesPerColumn
                )
                .map((image, index) => (
                  <div key={index} className="mb-4 relative active:bg-black">
                    <a
                      href={`/portfolio/${encodeURIComponent(image.title || "untitled")}`}
                    >
                      <img //switch to using next/image might be a good idea
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto rounded shadow-md active:opacity-60"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gray-800 bg-opacity-65 text-white text-center">
                        {image.title}
                      </div>
                    </a>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
