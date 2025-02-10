import { PropsWithChildren } from "react";

export function Heading2({ children }: PropsWithChildren) {
  return <h2 className="text-xl mb-3 font-semibold">{children}</h2>;
}
