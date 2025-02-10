export function ProductSheetTableHeading({ text }: { text: string }) {
  return (
    <tr>
      <td colSpan={2}>
        <h2 className="text-lg my-1 font-semibold">{text}</h2>
      </td>
    </tr>
  );
}
