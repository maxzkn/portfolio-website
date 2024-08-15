import { FC } from "react";
import { MainStackItemProps } from "./types";

export const MainStackItem: FC<MainStackItemProps> = ({
  title,
  technologies,
}) => {
  return (
    <div className="flex flex-col gap-2 md:gap-5">
      <p className="text-accent">{title}</p>
      <p>{technologies}</p>
    </div>
  );
};
