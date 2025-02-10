import { PropsWithChildren } from "react";
import { TableCell } from "./ui/table";

export function QuotesTableRowTableCell({
  children,
  className,
  lastRecommendedRow,
}: PropsWithChildren<{ className?: string; lastRecommendedRow: boolean }>) {
  return (
    <TableCell
      className={`${className} ${
        lastRecommendedRow && "border-b-2 border-[#000EEF]"
      }`}
    >
      {children}
    </TableCell>
  );
}
