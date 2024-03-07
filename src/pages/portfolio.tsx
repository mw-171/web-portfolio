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
  ];
  const column1 = images.slice(0, Math.ceil(images.length / 3));
  const column2 = images.slice(
    Math.ceil(images.length / 3),
    Math.ceil((images.length * 2) / 3)
  );
  const column3 = images.slice(Math.ceil((images.length * 2) / 3));

  return (
    <div
      className="min-h-screen bg-cover bg-center overflow-auto"
      style={{ backgroundImage: "url('/test.jpg')" }}
    >
      <div className="px-48 py-24">
        <p className="font-semibold flex justify-start items-center text-5xl text-blue-300">
          Portfolio
        </p>
        {/* TODO: add gallery carousel here of projects, click into more specifics. need to develop components for individual display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={image.src}
                alt={image.alt}
                className="max-w-full h-auto"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {images.map((image) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                className="h-auto object-cover rounded-lg max-w-full"
              />
            ))}
          </div>
        </div>
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
        </div>
      </div>
    </div>
  );
}
