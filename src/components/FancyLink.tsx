import React from "react";

interface FancyLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  newTab?: boolean;
}

const FancyLink: React.FC<FancyLinkProps> = ({
  href,
  children,
  className = "",
  newTab = true,
  ...props
}) => {
  return (
    <a
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noreferrer" : undefined}
      className="hover:cursor-pointer serif-font italic hover:border-b-2 hover:border-violet-200 hover:text-violet-300 hover:shadow-sm"
      {...props}
    >
      {children}
    </a>
  );
};

export default FancyLink;

