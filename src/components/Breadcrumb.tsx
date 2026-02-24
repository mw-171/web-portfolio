import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import type { ReactNode } from "react";
import { cn } from "../lib/utils";

type BreadcrumbItem = {
  label: ReactNode;
  href: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
  listClassName?: string;
};

export default function Breadcrumb({
  items,
  className,
  listClassName,
}: BreadcrumbProps) {
  return (
    <nav className={cn("flex", className)} aria-label="Breadcrumb">
      <ol
        className={cn(
          "flex items-center space-x-4 pb-8 pl-4 cursor-pointer",
          listClassName,
        )}
      >
        <li>
          <div>
            <a href="/" className="text-gray-400 hover:text-gray-500">
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">home</span>
            </a>
          </div>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.href}-${index}`}>
              <div className="flex items-center">
                <ChevronRightIcon
                  className="h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <a
                  href={item.href}
                  aria-current={isLast ? "page" : undefined}
                  className="ml-4 text-md font-medium text-gray-500 hover:text-gray-700 hover:cursor-pointer"
                >
                  {item.label}
                </a>
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

