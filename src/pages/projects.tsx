import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/footer";

export default function Projects() {
  return (
    <div className="h-screen">
      <div className="px-8 md:px-24 lg:px-48 py-24">
        <Breadcrumb items={[{ label: "projects", href: "/projects" }]} />
        <div className="flex justify-center items-center  pb-8 ">
          <span>a collection of projects!</span>
        </div>
      </div>
      <Footer />
    </div>
  );
}
