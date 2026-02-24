import Breadcrumb from "../../components/Breadcrumb";
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
  }

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
        <Breadcrumb
          items={[
            { label: "art", href: "/art" },
            { label: title || "untitled", href: "/projects" },
          ]}
        />
        {/* TODO: consider making this a modal instead - use this logic for projects */}
        <div className="flex flex-col md:flex-row justify-center items-center pt-2 gap-8">
          <div className="md:w-1/2 flex items-center justify-end">
            <img
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

