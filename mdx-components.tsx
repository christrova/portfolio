import { A as a } from "@/app//components/a";
import { P as p } from "@/app//components/p";
import { H1 as h1 } from "@/app//components/h1";
import { H2 as h2 } from "@/app//components/h2";
import { H3 as h3 } from "@/app//components/h3";
import { OL as ol } from "@/app//components/ol";
import { UL as ul } from "@/app//components/ul";
import { LI as li } from "@/app//components/li";
import { HR as hr } from "@/app//components/hr";
import { Code as code } from "@/app//components/code";
import { Image } from "@/app//components/image";

import { Caption } from "@/app//components/caption";

import { Blockquote as blockquote } from "@/app//components/blockquote";
import SeeMoreSection from "@/app/components/SeeMoreSection";
import SkillsList from "@/app/components/SkillsList";

export function useMDXComponents(components: {
  [component: string]: React.ComponentType;
}) {
  return {
    ...components,
    a,
    h1,
    h2,
    h3,
    p,
    ol,
    ul,
    li,
    hr,
    code,
    img: Image,
    blockquote,
    Image,
    Caption,
    SeeMoreSection,
    SkillsList,
  };
}
