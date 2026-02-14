import React from "react";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({
  href,
  children,
  className = "",
  ...props
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`border-b-2 border-gray-300 hover:text-violet-300 hover:border-violet-200 hover:shadow-sm ${className}`.trim()}
      {...props}
    >
      {children}
    </a>
  );
};

export default Link;

