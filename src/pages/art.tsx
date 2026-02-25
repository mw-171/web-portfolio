import Breadcrumb from "../components/Breadcrumb";
import Image from "next/image";
import { images } from "../lib/art";

export default function Portfolio() {
  const imagesPerColumn = Math.ceil(images.length / 4);

  return (
    <div className="min-h-screen bg-cover bg-center overflow-auto">
      <div className="px-8 md:px-24 lg:px-48 pt-24">
        <Breadcrumb items={[{ label: "art", href: "/art" }]} />
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
        <div className="flex flex-wrap mx-2">
          {[...Array(4)].map((_, columnIndex) => (
            <div key={columnIndex} className="w-1/2  md:w-1/3 lg:w-1/4 px-2">
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
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={500}
                        height={300}
                        className="w-full h-auto rounded shadow-md active:opacity-60 active:rounded-md"
                      />
                      <div className="absolute inset-0 flex items-center rounded-md justify-center opacity-0 hover:rounded-md hover:opacity-100 transition-opacity duration-300 bg-gray-800 bg-opacity-65 text-white text-center px-4">
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

