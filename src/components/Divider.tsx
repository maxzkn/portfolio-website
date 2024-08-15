import { FC } from "react";

interface DividerProps {
  classNames?: string;
}

export const Divider: FC<DividerProps> = ({ classNames }) => {
  const dividerBorderClassNames = "flex-1 border-b border-dashed border-slate-400";
  
  return (
     <div className={`flex items-center py-20 ${classNames || ""}`}>
      <div className={dividerBorderClassNames}></div>
      <span className="text-slate-400 text-lg px-8">&#47;&#47;</span>
      <div className={dividerBorderClassNames}></div>
    </div>
  );
};
