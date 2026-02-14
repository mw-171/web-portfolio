import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";
import LoadingSpinner from "../../components/loadingSpinner";
import { useEffect, useState } from "react";
import { images } from "../../lib/art";
import { ImageType } from "../../types/types";

export default function Title() {
  const [isLoading, setIsLoading] = useState(true);
  const [image, setImage] = useState<ImageType | null>(null);
  const router = useRouter();
  let title: string | undefined;

  if (typeof router.query.title === "string") {
    title = router.query.title;
  } else if (Array.isArray(router.query.title)) {
    title = router.query.title[0];
  } // console.log(router);  prints all the info!!

  useEffect(() => {
    const fetchImage = async () => {
      const img = await images.find((img) => img.title === title);
      if (img) {
        setImage(img);
        setIsLoading(false);
      }
    };
    fetchImage();
  }, [title]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center font-semibold text-2xl py-64">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="h-screen">
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
                  {title}
                </a>
              </div>
            </li>
          </ol>
        </nav>
        {/* TODO: consider making this a modal instead - use this logic for projects */}
        <div className="flex flex-col md:flex-row justify-center items-center pt-2 gap-8">
          <div className="md:w-1/2 flex items-center justify-end">
            <img // Replaced img with next/image
              src={image?.src}
              alt={image?.alt}
              className=" h-auto rounded shadow-md active:opacity-60 max-h-[500px]"
            />
          </div>
          <div className="md:w-1/4 flex flex-col justify-start gap-4 text-gray-600">
            <div className="font-semibold">{title}</div>
            <div className="italic">{image?.media}</div>
            <div className="">{image?.date}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

