import { Input, Stack, Text } from "@chakra-ui/react";
import React from "react";
import StepperInput from "./StepperInput";

interface LumpsumTabProps {}

const LumpsumTab: React.FunctionComponent<LumpsumTabProps> = () => {
  return (
    <Stack spacing={4}>
      <Text>Number of Years</Text>
      <StepperInput />
      <Text>Number of Months</Text>
      <StepperInput />
      <Text>Amount Invested</Text>
      <StepperInput />
      <Text>Estimated Profit</Text>
      <Input htmlSize={4} width="auto" />
      <Text>Capital Gain Tax</Text>
      <Input htmlSize={4} width="auto" isReadOnly />
      <Text>Return Intrest %</Text>
      <Input htmlSize={4} width="auto" isReadOnly />
    </Stack>
  );
};

export default LumpsumTab;
