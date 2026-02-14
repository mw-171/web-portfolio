import React from "react";

interface FancyLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

const FancyLink: React.FC<FancyLinkProps> = ({
  href,
  children,
  className = "",
  ...props
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="serif-font italic hover:border-b-2 hover:border-violet-200 hover:text-violet-300 hover:shadow-sm"
      {...props}
    >
      {children}
    </a>
  );
};

export default FancyLink;

