import { CodeProps } from "../types";

export function UL({ children }: CodeProps) {
  return (
    <ul className="my-5 list-none list-inside text-base md:text-lg lg:text-xl space-y-1 md:space-y-2">
      {children}
    </ul>
  );
}
