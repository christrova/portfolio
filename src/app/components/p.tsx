import { CodeProps } from "../types";

export function P({ children }: CodeProps) {
  return (
    <p className="my-5 text-base md:text-lg lg:text-xl leading-relaxed [blockquote_&]:my-2 [blockquote_&]:text-inherit">
      {children}
    </p>
  );
}
