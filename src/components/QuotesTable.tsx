import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Quote } from "../quotes";
import { QuotesTableRow } from "./QuotesTableRow";
import { QuotesTableRowRecommended } from "./QuotesTableRowRecommended";

export function QuotesTable({ quotes }: { quotes: Quote[] }) {
  return (
    <div className="bg-white rounded-sm shadow-md px-4 mb-8">
      <Table className="border-separate border-spacing-[0]">
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead className="uppercase">Variant</TableHead>
            <TableHead className="uppercase">Unit Price</TableHead>
            <TableHead className="uppercase">Quantity</TableHead>
            <TableHead className="uppercase">Production Time</TableHead>
            <TableHead className="uppercase">Ratings</TableHead>
            <TableHead className="uppercase">Cavela Review</TableHead>
            <TableHead className="uppercase">Files</TableHead>
            <TableHead className="uppercase">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {quotes
            .sort((a, b) =>
              // sort by recommended field, true is always first
              a.recommended === b.recommended ? 0 : a.recommended ? -1 : 1
            )
            .map((quote) => {
              return (
                <>
                  {quote.recommended && <QuotesTableRowRecommended />}
                  {quote.product_quotes.map((productQuote, index) => {
                    return (
                      <>
                        <QuotesTableRow
                          className={`cursor-pointer border-0 ${
                            quote.recommended && "bg-[#f7f6ff]"
                          }`}
                          key={`${productQuote.product}-${index}`}
                          productQuote={productQuote}
                          quote={quote}
                          lastRecommendedRow={
                            quote.recommended &&
                            index === quote.product_quotes.length - 1
                          }
                        />
                      </>
                    );
                  })}
                </>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
}
