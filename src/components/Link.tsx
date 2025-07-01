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
      className={`border-b-2 border-gray-300 hover:text-indigo-700 hover:border-indigo-500 ${className}`.trim()}
      {...props}
    >
      {children}
    </a>
  );
};

export default Link;

