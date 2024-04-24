// import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useState } from "react";

export default function Me() {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    return () => {
      setVisible(false);
    };
  }, []);

  return (
    <div className="py-48 flex items-center justify-center">
      <div
        className={`text-4xl font-semibold transition-opacity duration-150000 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        hi!
      </div>
      <div>this is going to be a cool easter egg!</div>
    </div>
  );
}

// export default function Me() {
//   return (
//     <>
//       <div data-scroll-container>
//         <div data-scroll-section>
//           <h1 className="text-6xl" data-scroll>
//             Hey
//           </h1>
//           <p data-scroll>👋</p>
//         </div>
//         <div data-scroll-section>
//           <h2 className="text-3xl" data-scroll data-scroll-speed="1">
//             What's up!!
//           </h2>
//           <p data-scroll data-scroll-speed="2">
//             😬
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }
