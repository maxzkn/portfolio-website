import { FC, ReactNode } from "react";

interface ExperienceItemContainerProps {
  children: ReactNode;
}

export const ExperienceItemContainer: FC<ExperienceItemContainerProps> = ({
  children,
}) => {
  return (
    <div className="relative flex h-full justify-center">
      <div className="absolute border-l-2 border-slate-300 opacity-40 h-full left-1/2"></div>
      <div className="flex flex-col w-full gap-16 py-16">
        {children}
      </div>
    </div>
  );
};
