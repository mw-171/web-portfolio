// import LocomotiveScroll from "locomotive-scroll";

export default function Me() {
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
            What's up!!
          </h2>
          <p data-scroll data-scroll-speed="2">
            😬
          </p>
        </div>
      </div>
    </>
  );
}
