export function ProgressCardSectionDivider({
  disabled,
  pulse,
}: {
  disabled?: boolean;
  pulse?: boolean;
}) {
  return (
    <div
      className={`w-[2px] bg-[#000EEF] h-[16px] rounded-lg relative left-[18px] transition-opacity ${
        disabled && "opacity-15"
      } ${pulse && "animate-pulse"}`}
    />
  );
}
