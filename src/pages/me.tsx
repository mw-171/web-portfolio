import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";

export default function Me() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]") as HTMLElement,
      smooth: true,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <>
      <div data-scroll-container>
        <div data-scroll-section>
          <h1 className="text-6xl" data-scroll>
            Hey
          </h1>
          <p data-scroll>👋</p>
        </div>
        <div data-scroll-section>
          <h2 className="text-3xl" data-scroll data-scroll-speed="1">
            What's up?
          </h2>
          <p data-scroll data-scroll-speed="2">
            😬
          </p>
        </div>
      </div>
    </>
  );
}
