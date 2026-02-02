import { CodeProps } from "../types";
import { withHeadingId } from "./utils";

export function H1({ children }: CodeProps) {
  return (
    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 group flex flex-row gap-1">
      <span className="invisible group-hover:visible -mx-5 text-gray-600 border-b-2 border-indigo-500 ">
        #
      </span>
      <span className="mx-6">{withHeadingId(children)}</span>
    </h1>
  );
}
