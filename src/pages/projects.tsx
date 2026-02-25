import Breadcrumb from "../components/Breadcrumb";

export default function Projects() {
  return (
    <div className="h-screen">
      <div className="px-8 md:px-24 lg:px-48 pt-24">
        <Breadcrumb items={[{ label: "projects", href: "/projects" }]} />
        <div className="flex justify-center items-center  pb-8 ">
          <span>a collection of projects!</span>
        </div>
      </div>
    </div>
  );
}

