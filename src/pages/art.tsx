import Breadcrumb from "../components/Breadcrumb";
import { useRouter } from "next/router";
import { images } from "../lib/art";
import { SmoothNextImage } from "../components/SmoothImage";

export default function Portfolio() {
  const router = useRouter();
  const from = Array.isArray(router.query.from)
    ? router.query.from[0]
    : router.query.from;

  const fromParam = from ? `?from=${from}` : "";

  return (
    <div className="min-h-screen bg-cover bg-center overflow-auto">
      <div className="pt-8">
        <div className="mx-auto max-w-[720px] px-4">
          <Breadcrumb page="art" from={from as string | undefined} />
          <div className="flex justify-center items-center pb-8 text-gray-500">
            <span>
              a collection of my{" "}
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
          <div className="columns-2 sm:columns-3 gap-4 space-y-4">
            {images.map((image) => (
              <div
                key={image.title}
                className="break-inside-avoid mb-4 relative active:bg-black"
              >
                <a
                  href={`/art/${encodeURIComponent(image.title || "untitled")}${fromParam}`}
                >
                  <SmoothNextImage
                    src={image.src}
                    alt={image.alt}
                    width={500}
                    height={300}
                    className="w-full h-auto shadow-md active:opacity-60"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gray-800 bg-opacity-65 text-white text-center px-4">
                    {image.title}
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

