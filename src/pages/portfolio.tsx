import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import Footer from "../components/footer";
import Image from "next/image";
import { images } from "../lib/art";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
interface Project {
  id: string;
  title: string;
  src: string;
  description: string;
  technologies: string[];
  github?: string;
  website?: string;
}

const projects = [
  {
    id: 1,
    title: "Hack the North",
    src: "hackthenorthmockup.png",
    description: "Static site for Canada's largest hackathon",
    technologies: ["React", "Typescript", "Styled components"],
    github: "https://github.com/hackthenorth/2024.hackthenorth.com",
    website: "https://2024.hackthenorth.com/",
  },
  {
    id: 2,
    title: "VoCal",
    src: "vocalmockup.png",
    description: "An AI voice-to-text scheduling app",
    technologies: [
      "TypeScript",
      "Whisper",
      "Google OAuth",
      "Next.js",
      "Tailwind",
    ],
    github: "https://github.com/mw-171/VoCal",
    website: "https://myvocal.ca/",
  },
  {
    id: 3,
    title: "To-done",
    src: "todonemockup.png",
    description:
      "A vscode extension that makes tracking inline TODO comments easy as pie",
    technologies: ["Node.js", "TypeScript"],
    github: "https://github.com/mw-171/to-done",
    website:
      "https://marketplace.visualstudio.com/items?itemName=omega3.to-done",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-cover bg-center overflow-auto">
      <div className="px-8 md:px-24 lg:px-48 py-24 md:pb-36">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-4 pb-8 pl-4">
            <li>
              <div>
                <a href="/" className="text-gray-400 hover:text-gray-500">
                  <HomeIcon
                    className="h-5 w-5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="sr-only">home</span>
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon
                  className="h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <a
                  href={"/portfolio"}
                  className="ml-4 text-md font-medium text-gray-500 hover:text-gray-700"
                >
                  portfolio
                </a>
              </div>
            </li>
          </ol>
        </nav>
        <div className="flex justify-center items-center pb-8">
          <span>a glimpse into some of my work ⊹ ࣪ ˖</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-lg border border-border bg-card hover:border-muted-foreground transition-all hover:shadow-lg"
            >
              <div className="relative w-full h-48 bg-muted overflow-hidden">
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="px-5 py-5 sm:pb-2 sm:pt-5">
                <span className="flex gap-2 items-center mb-2 ">
                  <h3 className="text-lg font-semibold text-foreground line-clamp-2">
                    {project.title}
                  </h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="opacity-20 hover:text-violet-500"
                    />
                  </a>
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className="opacity-20 hover:text-violet-500"
                    />
                  </a>
                </span>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech: any) => (
                    <span
                      key={tech}
                      className="inline-block px-2 py-1 hover:bg-violet-50 text-muted-foreground text-xs rounded-lg cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="inline-block px-2 py-1 text-muted-foreground text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

