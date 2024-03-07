//TODO: make everything look cooler, rounded edges, slight shadow, hover effect and click into component, etc.

export default function Portfolio() {
  const images = [
    { src: "/blue.jpeg", alt: "hey" },
    { src: "/uncle.jpg", alt: "hey" },
    { src: "/gold.jpeg", alt: "hey" },
    { src: "/red.jpeg", alt: "hey" },
    { src: "/red.jpeg", alt: "hey" },
    { src: "/csmbg1.jpg", alt: "hey" },
    { src: "/gold.jpeg", alt: "hey" },
    { src: "/blue.jpeg", alt: "hey" },
    { src: "/gold.jpeg", alt: "hey" },
    { src: "/gold.jpeg", alt: "hey" },
    { src: "/blue.jpeg", alt: "hey" },
    { src: "/gold.jpeg", alt: "hey" },
  ];

  const column1 = images.slice(0, Math.ceil(images.length / 4));
  const column2 = images.slice(
    Math.ceil(images.length / 4),
    Math.ceil((images.length * 2) / 4)
  );
  const column3 = images.slice(
    Math.ceil((images.length * 2) / 4),
    Math.ceil((images.length * 3) / 4)
  );
  const column4 = images.slice(Math.ceil((images.length * 3) / 4));

  const imagesPerColumn = Math.ceil(images.length / 4);

  return (
    <div
      className="min-h-screen bg-cover bg-center overflow-auto"
      style={{ backgroundImage: "url('/test.jpg')" }}
    >
      <div className="px-56 py-24">
        <p className="pb-8 font-semibold flex justify-start items-center text-4xl text-black">
          Portfolio
        </p>
        {/* TODO: add gallery carousel here of projects, click into more specifics. need to develop components for individual display */}

        <div className="flex flex-wrap">
          {/* Column 1 */}
          <div className="w-full md:w-1/3 lg:w-1/4 px-4">
            {column1.map((image, index) => (
              <div key={index} className="mb-4">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="w-full md:w-1/3 lg:w-1/4 px-4">
            {column2.map((image, index) => (
              <div key={index} className="mb-4">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>

          {/* Column 3 */}
          <div className="w-full md:w-1/3 lg:w-1/4 px-4">
            {column3.map((image, index) => (
              <div key={index} className="mb-4">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>

          {/* Column 4 */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-4">
            {column4.map((image, index) => (
              <div key={index} className="mb-4">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap">
          {[...Array(4)].map((_, columnIndex) => (
            <div key={columnIndex} className="w-full md:w-1/2 lg:w-1/4 px-4">
              {images
                .slice(
                  columnIndex * imagesPerColumn,
                  (columnIndex + 1) * imagesPerColumn
                )
                .map((image, index) => (
                  <div key={index} className="mb-4">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
