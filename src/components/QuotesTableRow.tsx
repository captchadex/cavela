import { TableRow } from "@/components/ui/table";
import File from "../assets/file.svg?react";
import { useState } from "react";
import { QuotesTableRowTableCell } from "./QuotesTableRowTableCell";
import { Status } from "./Status";
import { Tag } from "./Tag";
import { ProductQuote, Quote } from "@/quotes";
import { ProductSheet } from "./ProductSheet";
import { Rating } from "./Rating";

interface QuotesTableRowProps {
  className?: string;
  productQuote: ProductQuote;
  quote: Quote;
  lastRecommendedRow: boolean;
}

export function QuotesTableRow({
  className,
  productQuote,
  quote,
  lastRecommendedRow,
}: QuotesTableRowProps) {
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);

  return (
    <>
      <TableRow onClick={() => setIsSheetOpen(true)} className={`${className}`}>
        <QuotesTableRowTableCell
          className={`font-bold ${
            quote.recommended && "border-l-2 border-[#000EEF]"
          } ${lastRecommendedRow && "rounded-bl-[8px]"}`}
          lastRecommendedRow={lastRecommendedRow}
        >
          {quote.supplier.supplier_cloak}
        </QuotesTableRowTableCell>
        <QuotesTableRowTableCell lastRecommendedRow={lastRecommendedRow}>
          {productQuote.product_name}
        </QuotesTableRowTableCell>
        <QuotesTableRowTableCell lastRecommendedRow={lastRecommendedRow}>
          ${productQuote.exw_unit_price_marked_up}
        </QuotesTableRowTableCell>
        <QuotesTableRowTableCell lastRecommendedRow={lastRecommendedRow}>
          {productQuote.quantity.toLocaleString()}
        </QuotesTableRowTableCell>
        <QuotesTableRowTableCell lastRecommendedRow={lastRecommendedRow}>
          {productQuote.production_time_days} Days
        </QuotesTableRowTableCell>
        <QuotesTableRowTableCell lastRecommendedRow={lastRecommendedRow}>
          <Rating score={quote.supplier.average_score} />
        </QuotesTableRowTableCell>
        <QuotesTableRowTableCell lastRecommendedRow={lastRecommendedRow}>
          {productQuote.tags.map((tag) => (
            <Tag tag={tag} />
          ))}
        </QuotesTableRowTableCell>
        <QuotesTableRowTableCell lastRecommendedRow={lastRecommendedRow}>
          <div className="flex items-center">
            <span className="text-[#6E747D] mr-1">
              {productQuote.files.length}
            </span>{" "}
            <File />
          </div>
        </QuotesTableRowTableCell>
        <QuotesTableRowTableCell
          className={`${quote.recommended && "border-r-2 border-[#000EEF]"} ${
            lastRecommendedRow && "rounded-br-[8px]"
          }`}
          lastRecommendedRow={lastRecommendedRow}
        >
          <Status status={quote.status} />
        </QuotesTableRowTableCell>
      </TableRow>
      <ProductSheet
        isSheetOpen={isSheetOpen}
        setIsSheetOpen={setIsSheetOpen}
        quote={quote}
        productQuote={productQuote}
      />
    </>
  );
}
