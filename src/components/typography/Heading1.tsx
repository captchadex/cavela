import { PropsWithChildren } from "react";

export function Heading1({ children }: PropsWithChildren) {
  return <h1 className="text-3xl mb-8 font-bold">{children}</h1>;
}
