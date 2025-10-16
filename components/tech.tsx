"use client";

import React from "react";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiReacthookform,
  SiEslint,
  SiReactrouter,
  SiAmazonwebservices,
  SiGithubactions,
  SiPython,
  SiCloudflare,
  SiGit,
  SiRedis,
  SiNodedotjs,
  SiAngular,
  SiFastapi,
} from "react-icons/si";
import InfiniteCarousel from "./carousel";

export default function Tech() {
  return (
    <div className="max-w-(--breakpoint-lg) mx-5 lg:mx-auto flex justify-center items-center mt-6 relative before:content-[''] before:absolute before:left-0 before:top-0 before:w-20 before:h-full before:bg-linear-to-r before:from-background before:to-transparent before:z-10 after:content-[''] after:absolute after:right-0 after:top-0 after:w-20 after:h-full after:bg-linear-to-l after:from-background after:to-transparent after:z-10">
      <InfiniteCarousel
        items={[
          <SiTypescript
            key={0}
            className="text-primary hover:text-destructive h-10 w-10"
          />,
          <SiJavascript
            key={1}
            className="text-primary hover:text-destructive h-10 w-10"
          />,
          <SiReact
            key={2}
            className="text-primary hover:text-destructive h-10 w-10"
          />,
          <SiNextdotjs
            key={3}
            className="text-primary hover:text-destructive h-10 w-10"
          />,
          <SiRedux
            key={4}
            className="text-primary hover:text-destructive h-10 w-10"
          />,
          <SiReacthookform
            key={5}
            className="text-primary hover:text-destructive h-10 w-10"
          />,
          <SiEslint
            key={6}
            className="text-primary hover:text-destructive h-10 w-10"
          />,
          <SiReactrouter
            key={7}
            className="text-primary hover:text-destructive h-10 w-10"
          />,
          <SiAngular
            key={8}
            className="text-primary hover:text-destructive h-10 w-10"
          />,
          <SiAmazonwebservices
            key={9}
            className="text-primary hover:text-destructive h-10 w-10"
          />,
          <SiCloudflare
            key={10}
            className="text-primary hover:text-destructive h-10 w-10"
          />,
          <SiGithubactions
            key={13}
            className="text-primary hover:text-destructive h-10 w-10"
          />,
          <SiGit
            key={14}
            className="text-primary hover:text-destructive h-10 w-10"
          />,
          <SiPython
            key={15}
            className="text-primary hover:text-destructive h-10 w-10"
          />,
          <SiFastapi
            key={16}
            className="text-primary hover:text-destructive h-10 w-10"
          />,
          <SiRedis
            key={18}
            className="text-primary hover:text-destructive h-10 w-10"
          />,
          <SiNodedotjs
            key={19}
            className="text-primary hover:text-destructive h-10 w-10"
          />,
        ]}
      />
    </div>
  );
}
