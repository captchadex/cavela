import { Badge } from "./ui/badge";

export const Tag = ({ tag }: { tag: string }) => {
  switch (tag) {
    case "fastest-lead-time":
      return (
        <Badge
          variant="outline"
          className="text-center mr-2 border-0 bg-green-100 text-green-600"
        >
          Fastest Lead Time
        </Badge>
      );
    case "best-value":
      return (
        <Badge
          variant="outline"
          className="text-center border-0 bg-blue-100 text-blue-600 mr-2"
        >
          Best Value
        </Badge>
      );
    case "highly-rated":
      return (
        <Badge
          variant="outline"
          className="text-center mr-2 border-0 bg-yellow-100 text-yellow-600"
        >
          Highly Rated
        </Badge>
      );
    default:
      return "N/A";
  }
};
