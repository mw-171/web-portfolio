import Breadcrumb from "../../components/Breadcrumb";
import { useRouter } from "next/router";
import LoadingSpinner from "../../components/loadingSpinner";
import { useEffect, useState } from "react";
import { images } from "../../lib/art";
import { ImageType } from "../../types/types";
import { SmoothImg } from "../../components/SmoothImage";
// breadcrumb generator used by the Breadcrumb component; not needed directly here

export default function Title() {
  const [isLoading, setIsLoading] = useState(true);
  const [image, setImage] = useState<ImageType | null>(null);
  const router = useRouter();
  let title: string | undefined;

  if (typeof router.query.title === "string") {
    title = router.query.title;
  } else if (Array.isArray(router.query.title)) {
    title = router.query.title[0];
  }

  const from = Array.isArray(router.query.from)
    ? router.query.from[0]
    : router.query.from;

  // Breadcrumb will compute items when given page hint and title
  // this keeps page files minimal and avoids duplicating arrays

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
      <div className="pt-8">
        <div className="mx-auto max-w-[720px] px-4">
          <Breadcrumb page="artDetail" title={title} from={from as string | undefined} />
          {/* TODO: consider making this a modal instead - use this logic for projects */}
          <div className="flex flex-col md:flex-row justify-center items-center pt-2 gap-8">
            <div className="md:w-1/2 flex items-center justify-end">
              <SmoothImg
                src={image?.src}
                alt={image?.alt}
                className="h-auto rounded shadow-md active:opacity-60 max-h-[500px]"
              />
            </div>
            <div className="md:w-1/4 flex flex-col text-center sm:text-left  justify-start gap-4 text-gray-600">
              <div className="font-semibold">{title}</div>
              <div className="italic">{image?.media}</div>
              <div className="">{image?.date}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

