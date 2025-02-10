import { ProductSheetTableHeading } from "./ProductSheetTableHeading";
import { ProductSheetTableRow } from "./ProductSheetTableRow";
import { Rating } from "./Rating";
import { Status } from "./Status";
import { Button } from "./ui/button";
import File from "../assets/file.svg?react";
import { ProductQuote, Quote } from "@/quotes";
import { Tag } from "./Tag";

export function ProductSheetTable({
  quote,
  productQuote,
}: {
  quote: Quote;
  productQuote: ProductQuote;
}) {
  return (
    <table className="w-[100%]">
      <ProductSheetTableRow
        heading="Status"
        content={
          <Status
            status={quote.status}
            className="justify-center sm:justify-normal"
          />
        }
      />
      <ProductSheetTableHeading text="Product" />
      <ProductSheetTableRow
        heading="Variant"
        content={productQuote.product_name}
      />
      <ProductSheetTableRow
        heading="EXW Unit Price"
        content={`${productQuote.exw_unit_price_marked_up}`}
      />
      <ProductSheetTableRow
        heading="DDP Unit Price"
        content={`From ${productQuote.ddp_unit_price_marked_up}`}
      />
      <ProductSheetTableRow
        heading="Quantity"
        content={productQuote.quantity.toLocaleString()}
      />
      <ProductSheetTableRow
        heading="Production Time"
        content={`${productQuote.production_time_days} Days`}
      />
      <ProductSheetTableRow
        heading="Shipping Time"
        content={`${productQuote.shipping_time_days} Days`}
      />
      <ProductSheetTableRow heading="Method" content="Sea" />
      <ProductSheetTableRow
        heading="Payment Terms"
        content="50% upfront, 50% after reception"
      />
      <ProductSheetTableHeading text="Sample" />
      <ProductSheetTableRow
        heading="Sample Cost"
        content={`\$${productQuote.sample_cost_marked_up}`}
      />
      <ProductSheetTableRow
        heading="Shipping Cost"
        content={`\$${productQuote.shipping_cost}`}
      />
      <ProductSheetTableRow
        heading="Production Time"
        content={`${productQuote.sample_production_time_days} Days`}
      />
      <ProductSheetTableRow
        heading="Shipping Time"
        content={`${productQuote.sample_lead_time_days_with_shipping} Days`}
      />
      <ProductSheetTableHeading text="Supplier Details" />
      <ProductSheetTableRow
        heading="Rating"
        content={
          <Rating
            score={quote.supplier.average_score}
            className="justify-center sm:justify-normal"
          />
        }
      />
      {productQuote.tags.length > 0 && (
        <ProductSheetTableRow
          heading="Review"
          content={productQuote.tags.map((tag) => (
            <Tag tag={tag} />
          ))}
        />
      )}
      {productQuote.client_notes && (
        <ProductSheetTableRow
          heading="Notes"
          content={productQuote.client_notes}
        />
      )}
      {productQuote.files.length > 0 && (
        <>
          <ProductSheetTableHeading text="References" />
          <ProductSheetTableRow
            heading="Files"
            content={productQuote.files.map((file) => {
              return (
                <Button
                  variant="outline"
                  className="w-[250px] h-[65px] p-3 flex gap-3 text-left overflow-hidden justify-start"
                  asChild
                >
                  <a href={file.url} target="_blank">
                    <File className="relative bottom-[9px]" />
                    <div className="flex flex-col overflow-hidden">
                      <span className="text-sm font-medium truncate mb-[2px]">
                        {file.name}
                      </span>
                      <span className="text-xs text-gray-500 truncate">
                        {file.description}
                      </span>
                    </div>
                  </a>
                </Button>
              );
            })}
          />
        </>
      )}
    </table>
  );
}
