import { FC } from "react";

export const Divider: FC = () => {
  const dividerBorderClassNames = "flex-1 border-b border-dashed border-gray-300";
  
  return (
     <div className="flex items-center py-20">
      <div className={dividerBorderClassNames}></div>
      <span className="text-gray-400 text-lg px-8">&#47;&#47;</span>
      <div className={dividerBorderClassNames}></div>
    </div>
  );
};
