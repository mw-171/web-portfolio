import Footer from "../components/footer";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <>
      <Analytics />
      <div className="flex flex-col justify-center items-center px-48 py-64 sm:py-80 ">
        <div className="text-5xl text-gray-700 font-semibold">
          hi, i'm <span className="serif-font italic">megan</span>
        </div>
        <div className="flex items-center space-x-4 pt-4">
          <div>
            <a
              href="/about"
              className="pl-4 text-sm font-medium text-gray-400 hover:text-gray-700"
            >
              <span>about</span>
            </a>
          </div>
          <div className="flex items-center">
            <svg
              className="h-5 w-5 flex-shrink-0 text-gray-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
            </svg>
            <a
              href="/portfolio"
              className="pl-4 text-sm font-medium text-gray-400 hover:text-gray-700"
            >
              portfolio
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

