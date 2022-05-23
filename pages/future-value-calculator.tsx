import { Heading } from "@chakra-ui/react";
import React from "react";

interface FutureValueCalculatorProps {}

const FutureValueCalculator: React.FunctionComponent<
  FutureValueCalculatorProps
> = () => {
  return (
    <div>
      <Heading as="h4" size="md" style={{ marginTop: 15, color: "#189AB4" }}>
        Future Value Calculator
      </Heading>
    </div>
  );
};

export default FutureValueCalculator;
