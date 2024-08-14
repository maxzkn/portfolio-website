import Link from "next/link";
import { FC, ReactNode } from "react";

interface CustomLinkProps {
  link: string;
  classNames?: string;
  children: ReactNode;
}

export const CustomLink: FC<CustomLinkProps> = ({
  link,
  classNames,
  children,
}) => {
  return (
    <Link
      href={link}
      role="button"
      target="_blank"
      rel="noopener noreferrer"
      className={classNames || ""}
    >
      {children}
    </Link>
  );
};
