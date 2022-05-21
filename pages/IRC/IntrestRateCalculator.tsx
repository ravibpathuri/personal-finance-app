import { Box, Heading, Input, Stack, Text } from "@chakra-ui/react";
import React from "react";
//import styles from "../styles/Home.module.css";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import MySlider from "./MySlider";
import StepperInput from "./StepperInput";

interface IntrestRateCalculatorProps {}

const IntrestRateCaluclator: React.FunctionComponent<
  IntrestRateCalculatorProps
> = () => {
  return (
    <div>
      <Heading as="h4" size="md" style={{ marginTop: 15, color: "#189AB4" }}>
        Intrest Rate Calculator
      </Heading>
      <Tabs
        variant="soft-rounded"
        colorScheme="green"
        style={{ marginTop: 15, color: "#189AB4" }}
      >
        <TabList>
          <Tab>Lumpsum</Tab>
          <Tab>SIP</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
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
          </TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default IntrestRateCaluclator;
