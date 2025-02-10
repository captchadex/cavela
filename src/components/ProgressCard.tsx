import { Card, CardContent } from "@/components/ui/card";

import Person from "../assets/person.svg?react";
import Airplane from "../assets/airplane.svg?react";
import Message from "../assets/message.svg?react";
import Money from "../assets/money.svg?react";
import { useEffect, useState } from "react";
import { ProgressCardSection } from "./ProgressCardSection";
import { ProgressCardSectionDivider } from "./ProgressCardSectionDivider";

import { PROGRESS_STATS } from "@/progressStats";

export function ProgressCard() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [contactedSuppliers, setContactedSuppliers] = useState<string>("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCurrentStep((prevState) => prevState + 1);
      setContactedSuppliers(
        PROGRESS_STATS.stats.contacted_suppliers.toString()
      );
    }, 2000);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <Card>
      <CardContent className="py-4">
        <ProgressCardSection
          icon={<Person />}
          content={
            <>
              <span className="font-semibold">
                Identified{" "}
                <span className="text-[#000EEF] text-xl">
                  {PROGRESS_STATS.stats.supplier_contact_estimation}
                </span>{" "}
                best matches out of 2,081,201 suppliers
              </span>
              <br />
              <span className="text-[#6E747D]">
                We search for suppliers that match your exact product
                requirement and location.
              </span>
            </>
          }
        />
        <ProgressCardSectionDivider
          disabled={currentStep < 2}
          pulse={currentStep === 1}
        />
        <ProgressCardSection
          icon={<Airplane />}
          content={
            <>
              <span className="font-semibold">
                Reached out to{" "}
                <span className="text-[#000EEF] text-xl">
                  {contactedSuppliers}
                </span>{" "}
                suppliers
              </span>
              <br />
              <span className="text-[#6E747D]">
                We share your product info with matched suppliers to understand
                their interest.
              </span>
            </>
          }
          disabled={currentStep < 2}
        />
        <ProgressCardSectionDivider
          disabled={currentStep < 3}
          pulse={currentStep === 2}
        />
        <ProgressCardSection
          icon={<Message />}
          content={
            <>
              <span className="font-semibold">Engaging suppliers</span>
              <br />
              <span className="text-[#6E747D]">
                We communicate with interested suppliers to verify their terms
                to prep for quotes.
              </span>
            </>
          }
          disabled={currentStep < 3}
        />
        <ProgressCardSectionDivider
          disabled={currentStep < 4}
          pulse={currentStep === 3}
        />
        <ProgressCardSection
          icon={<Money />}
          content={
            <>
              <span className="font-semibold">Received quotes</span>
              <br />
              <span className="text-[#6E747D]">
                We receive detailed quote that is ready for you to select.
              </span>
            </>
          }
          disabled={currentStep < 4}
        />
      </CardContent>
    </Card>
  );
}
