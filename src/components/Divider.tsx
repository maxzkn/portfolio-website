import { FC } from "react";

interface DividerProps {
  classNames?: string;
}

export const Divider: FC<DividerProps> = ({ classNames }) => (
  <div className={`flex items-center py-20 ${classNames || ""}`}>
    <div className="divider"></div>
    <span className="text-slate-400 text-lg px-8">&#47;&#47;</span>
    <div className="divider"></div>
  </div>
);
