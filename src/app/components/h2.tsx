import { CodeProps } from "../types";
import { withHeadingId } from "./utils";

export function H2({ children }: CodeProps) {
  return (
    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 group flex flex-row gap-1">
      <span className="invisible group-hover:visible -mx-5 text-gray-600 border-b-2 border-indigo-500 ">
        #
      </span>
      <span className="mx-6">{withHeadingId(children)}</span>
    </h2>
  );
}
