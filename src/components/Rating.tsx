import Star from "../assets/star.svg?react";

export function Rating({
  className,
  score,
}: {
  className?: string;
  score: number;
}) {
  return (
    <div className={`${className} flex items-center`}>
      <span className="mr-1">{score}</span> <Star />
    </div>
  );
}
