import Circle from "../assets/circle.svg?react";

export function Status({
  className,
  status,
}: {
  className?: string;
  status: string;
}) {
  if (status === "surfaced") {
    return (
      <div className={`${className} flex items-center`}>
        <Circle className="mr-1" /> Not purchased
      </div>
    );
  }

  return null;
}
