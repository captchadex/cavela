import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ProductQuote, Quote } from "@/quotes";
import { Status } from "./Status";
import { Rating } from "./Rating";
import { Tag } from "./Tag";
import File from "../assets/file.svg?react";
import Cross from "../assets/cross.svg?react";
import Check from "../assets/check.svg?react";
import Recommended from "../assets/recommended.svg?react";
import { ProductSheetTableRow } from "./ProductSheetTableRow";
import { ProductSheetTableHeading } from "./ProductSheetTableHeading";
import { ProductSheetTable } from "./ProductSheetTable";

export function ProductSheet({
  isSheetOpen,
  setIsSheetOpen,
  quote,
  productQuote,
}: {
  isSheetOpen: boolean;
  setIsSheetOpen: React.Dispatch<React.SetStateAction<boolean>>;
  quote: Quote;
  productQuote: ProductQuote;
}) {
  return (
    <Sheet open={isSheetOpen} onOpenChange={() => setIsSheetOpen(false)}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col justify-between">
        <SheetHeader>
          <SheetTitle>{quote.supplier.supplier_cloak}</SheetTitle>
          <SheetDescription>
            {quote.recommended ? (
              <div className="sm:border-2 sm:border-[#000EEF] rounded-[11px] bg-[#f7f6ff]">
                <div className="font-bold flex items-center bg-[#000EEF] text-white p-2 w-[200px] rounded-tl-[8px] rounded-br-[8px]">
                  <Recommended />
                  <span>Cavela Recommended</span>
                </div>
                <div className="p-4">
                  <ProductSheetTable
                    quote={quote}
                    productQuote={productQuote}
                  />
                </div>
              </div>
            ) : (
              <ProductSheetTable quote={quote} productQuote={productQuote} />
            )}
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild>
            <Button
              className="w-[100%] rounded-lg border border-[#000EEF] text-[#000EEF] hover:text-[#000EEF] mr-4"
              variant="outline"
            >
              <Cross /> Close
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button
              className="w-[100%] rounded-lg bg-[#000EEF] hover:bg-opacity-50"
              type="submit"
            >
              <Check /> Purchase a sample
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
