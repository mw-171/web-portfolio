import Breadcrumb from "../components/Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { SmoothImg } from "../components/SmoothImage";

const projects = [
  {
    id: 1,
    title: "Hack the North",
    src: "hackthenorthmockup.png",
    caption: "Canada's largest hackathon",
    description:
      "Frontend organizer for the main static site & application portal",
    technologies: ["Typescript", "Styled components"],
    github: "https://github.com/hackthenorth/2024.hackthenorth.com",
    website: "https://2024.hackthenorth.com/",
  },
  {
    id: 2,
    title: "VoCal",
    src: "vocalmockup.png",
    caption: "AI voice-to-text scheduling",
    description: "Simplify creating calendar events",
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
    title: "Sparks",
    src: "sparks.png",
    caption: "Hinge data visualizer",
    description: "A fun way to learn more about your Hinge statistics 👀",
    technologies: ["Typescript"],
    github: "https://github.com/mw-171/sparks",
    website: "https://sparkss.vercel.app/",
  },
  {
    id: 4,
    title: "To-done",
    src: "todonemockup.png",
    caption: "Inline TODOs tracker",
    description: "A vscode extension that makes tracking TODOs easy as pie",
    technologies: ["Node.js", "TypeScript"],
    github: "https://github.com/mw-171/to-done",
    website:
      "https://marketplace.visualstudio.com/items?itemName=omega3.to-done",
  },
  {
    id: 5,
    title: "Split",
    src: "split.png",
    caption: "Expense splitting app",
    description: "Easily track expenses and collect debts amongst friends 💸",
    technologies: ["TypeScript", "Prisma"],
    website: "https://split-0.vercel.app/",
  },
];

//TODO: redo the layout/styling of this page
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-cover bg-center overflow-auto">
      <div className="pt-24">
        <div className="mx-auto max-w-[720px] px-4">
          <Breadcrumb items={[{ label: "portfolio", href: "/portfolio" }]} />
          <div className="flex justify-center items-center pb-8">
            <span>a glimpse into some of my work ⊹ ࣪ ˖</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
            {projects.map((project) => {
              return (
                <div key={project.id} className="group flex flex-col">
                  <div className="relative w-full h-48 sm:h-36 bg-muted overflow-hidden">
                    <SmoothImg
                      src={project.src}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />

                    {/* Hover overlay content */}
                    <div className="absolute inset-0 bg-gray-800 bg-opacity-75 transition-opacity duration-300 flex flex-col justify-end py-3 px-4 sm:px-3 opacity-0 group-hover:opacity-100">
                      <p className="text-xs text-gray-300 mb-2 line-clamp-2 pr-24 sm:pr-0">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1 mb-2">
                        {project.technologies.slice(0, 3).map((tech: any) => (
                          <span
                            key={tech}
                            className="inline-block px-1.5 py-0.5 text-gray-300 text-xs rounded bg-gray-800 bg-opacity-50"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="inline-block px-1.5 py-0.5 text-gray-300 text-xs">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="flex gap-2 items-center">
                        {project.github ? (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FontAwesomeIcon
                              icon={faGithub}
                              className="text-gray-300 hover:text-white text-sm"
                            />
                          </a>
                        ) : null}
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faArrowUpRightFromSquare}
                            className="text-gray-300 hover:text-white text-sm"
                          />
                        </a>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-sm font-semibold text-foreground mt-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-1">
                    {project.caption}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

