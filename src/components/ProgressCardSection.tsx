import { ReactNode } from "react";

export function ProgressCardSection({
  icon,
  content,
  disabled,
}: {
  icon: ReactNode;
  content: ReactNode;
  disabled?: boolean;
}) {
  return (
    <div
      className={`flex items-center transition-opacity delay-150 duration-300 ${
        disabled && "opacity-15"
      }`}
    >
      <div className="mr-3">{icon}</div> <p>{content}</p>
    </div>
  );
}
