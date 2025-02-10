import { ReactNode } from "react";

export function ProductSheetTableRow({
  heading,
  content,
}: {
  heading: string;
  content: ReactNode;
}) {
  return (
    <tr className="border-b border-color-gray-100">
      <td className="text-[#6E747D] py-2 align-top">{heading}</td>
      <td className="py-2">{content}</td>
    </tr>
  );
}
