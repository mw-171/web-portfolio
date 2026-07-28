import Breadcrumb from "../../components/Breadcrumb";
import type { GetServerSideProps } from "next";
import { images } from "../../lib/art";
import { ImageType } from "../../types/types";
import { SmoothImg } from "../../components/SmoothImage";
import { Reveal, revealProps } from "../../components/Reveal";

type Props = {
  image: ImageType;
  title: string;
  from: string | null;
};

export default function Title({ image, title, from }: Props) {
  return (
    <div className="h-screen">
      <div className="pt-8">
        <div className="mx-auto max-w-[720px] px-4">
          <Reveal index={0}>
            <Breadcrumb
              page="artDetail"
              title={title}
              from={from ?? undefined}
            />
          </Reveal>
          {/* TODO: consider making this a modal instead - use this logic for projects */}
          <div className="flex flex-col md:flex-row justify-center items-center pt-2 gap-8">
            <div {...revealProps(1, "md:w-1/2 flex items-center justify-end")}>
              <SmoothImg
                src={image.src}
                alt={image.alt}
                className="h-auto rounded shadow-md active:opacity-60 max-h-[500px]"
              />
            </div>
            <div className="md:w-1/4 flex flex-col text-center sm:text-left  justify-start gap-4 text-gray-600">
              <div {...revealProps(2, "font-semibold")}>{title}</div>
              <div {...revealProps(3, "italic")}>{image.media}</div>
              <div {...revealProps(4)}>{image.date}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// resolving the artwork on the server puts it in the html, so the reveal
// cascade starts at first paint like every other page — client-side lookup
// meant it couldn't start until hydration finished
export const getServerSideProps: GetServerSideProps<Props> = async ({
  params,
  query,
}) => {
  const rawTitle = params?.title;
  const title = Array.isArray(rawTitle) ? rawTitle[0] : rawTitle;
  const image = images.find((img) => img.title === title);

  if (!title || !image) {
    return { notFound: true };
  }

  const rawFrom = query.from;
  const from = (Array.isArray(rawFrom) ? rawFrom[0] : rawFrom) ?? null;

  return { props: { image, title, from } };
};
