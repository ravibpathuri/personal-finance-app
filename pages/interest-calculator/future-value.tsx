import { NextPage } from "next";
import { Heading } from "@chakra-ui/react";

import InterestCalculator from "../../components/InterestCalculator";

const FVCalculatorPage: NextPage = () => (
  <InterestCalculator type="FutureValue" />
);

export default FVCalculatorPage;
