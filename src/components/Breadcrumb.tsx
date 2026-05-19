import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import type { ReactNode } from "react";
import { cn } from "../lib/utils";
import { useRouter } from "next/router";
import { getBreadcrumbs } from "../lib/breadcrumbs";

type BreadcrumbItem = {
  label: ReactNode;
  href: string;
};

type BreadcrumbProps = {
  items?: BreadcrumbItem[];
  page?: string; // optional page hint, e.g. 'artDetail'
  title?: string;
  from?: string;
  className?: string;
  listClassName?: string;
};

export default function Breadcrumb({
  items,
  page,
  title,
  from,
  className,
  listClassName,
}: BreadcrumbProps) {
  const router = useRouter();

  const computedItems: BreadcrumbItem[] =
    items && items.length > 0
      ? items
      : // prefer explicit props, otherwise derive from router.asPath
        (getBreadcrumbs({ page, title, from, path: router.asPath }) as BreadcrumbItem[]);
  return (
    <nav className={cn("flex", className)} aria-label="Breadcrumb">
      <ol
        className={cn(
          "flex items-center space-x-4 pb-8 hover:cursor-pointer",
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

        {computedItems.map((item, index) => {
          const isLastComputed = index === computedItems.length - 1;
          return (
            <li key={`${item.href}-${index}`}>
              <div className="flex items-center">
                <ChevronRightIcon
                  className="h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <a
                  href={item.href}
                  aria-current={isLastComputed ? "page" : undefined}
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

