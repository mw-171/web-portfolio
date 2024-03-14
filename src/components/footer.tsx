import { Bars3Icon, BellIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Footer() {
  const router = useRouter();

  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="mt-10 flex justify-center space-x-10">
          <div className="w-6 h-6 relative">
            <a
              href="https://www.linkedin.com/in/megan-bx-wu/"
              className="text-gray-500 hover:text-gray-900 hover:cursor-pointer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          <div className="w-6 h-6 relative">
            <a
              href="https://www.instagram.com/m.117.w/?hl=en"
              className="text-gray-500 hover:text-gray-900 hover:cursor-pointer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <div className="w-6 h-6 relative">
            <a
              href="https://github.com/mw-171"
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
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2024 Megan Wu, Made with React, Tailwind, Next.
        </p>
      </div>
    </footer>
  );
}
