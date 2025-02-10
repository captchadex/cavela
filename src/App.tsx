import "./App.css";
import { ProgressCard } from "./components/ProgressCard";
import { QuotesTable } from "./components/QuotesTable";
import { Heading1, Heading2 } from "./components/typography";
import { Quote, QUOTES } from "./quotes";

function getProductQuotesTotal(quotes: Quote[]) {
  let total = 0;

  quotes.forEach((quote) => {
    total += quote.product_quotes.length;
  });

  return total;
}

function App() {
  return (
    <>
      <Heading1>Select suppliers</Heading1>
      <Heading2>Quotes ({getProductQuotesTotal(QUOTES)})</Heading2>
      <QuotesTable quotes={QUOTES} />
      <Heading2>Progress</Heading2>
      <ProgressCard />
    </>
  );
}

export default App;
