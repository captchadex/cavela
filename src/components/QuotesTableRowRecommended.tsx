import { TableCell, TableRow } from "@/components/ui/table";
import Recommended from "../assets/recommended.svg?react";

export function QuotesTableRowRecommended() {
  return (
    <TableRow className="border-0">
      <TableCell
        colSpan={2}
        className="bg-[#000EEF] text-white font-bold rounded-tl-[8px] rounded-br-[8px] p-2"
      >
        <div className="flex items-center">
          <Recommended />
          <span>Cavela Recommended</span>
        </div>
      </TableCell>
      <TableCell
        colSpan={7}
        className="border-t-2 border-r-2 border-[#000EEF] bg-[#f7f6ff] rounded-tr-[8px]"
      ></TableCell>
    </TableRow>
  );
}
