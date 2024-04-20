import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="mt-10 flex justify-center space-x-10">
          <div className="w-6 h-6 relative">
            <a
              href="https://www.linkedin.com/in/megan-bx-wu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 hover:cursor-pointer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          <div className="w-6 h-6 relative">
            <a
              href="https://www.instagram.com/m.117.w/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 hover:cursor-pointer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <div className="w-6 h-6 relative">
            <a
              href="https://github.com/mw-171"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 hover:cursor-pointer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <div className="w-6 h-6 relative">
            <a
              href="mailto:meganbxwu@gmail.com"
              className="text-gray-500 hover:text-gray-900 hover:cursor-pointer"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
        <a
          href="https://github.com/mw-171/web-portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="mt-10 text-center text-xs leading-5 text-gray-500 hover:text-gray-900 hover:underline">
            &copy; 2024 Megan Wu, Made with Typescript, Tailwind, Next.
          </p>
        </a>
      </div>
    </footer>
  );
}
