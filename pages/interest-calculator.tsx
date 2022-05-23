import { Box, Heading, Input, Stack, Text } from "@chakra-ui/react";
import React from "react";
//import styles from "../styles/Home.module.css";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import MySlider from "../components/MySlider";
import StepperInput from "../components/StepperInput";
import LumpsumTab from "../components/LumpsumTab";

interface InterestRateCalculatorProps {}

const InterestRateCaluclator: React.FunctionComponent<
  InterestRateCalculatorProps
> = () => {
  return (
    <div>
      <Heading as="h4" size="md" style={{ marginTop: 15, color: "#189AB4" }}>
        Interest Rate Calculator
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
            <LumpsumTab />
          </TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default InterestRateCaluclator;
