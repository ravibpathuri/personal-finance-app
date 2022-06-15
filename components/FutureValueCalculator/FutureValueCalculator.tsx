import { Heading } from "@chakra-ui/react";
import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Stack,
  Center,
} from "@chakra-ui/react";
import LumpsumTab from "./LumpsumTab";
import SIPTab from "./SIPTab";

interface FutureValueCalculatorProps {
  type: "Rate" | "FutureValue";
}

const FutureValueCalculator: React.FC<FutureValueCalculatorProps> = ({
  type,
}) => {
  return (
    <Center>
      <Box as={"div"} mt={10} maxW="md" w="100%">
        {/* <div style={{ marginLeft: 20, color: " #189ab4" }}>
          <FaHome />
        </div> */}

        <Center>
          <Heading as="h4" size="md" style={{ margin: 15 }} color="orange.300">
            Future Value Calculator
          </Heading>
        </Center>

        <Tabs
          variant="soft-rounded"
          colorScheme="green"
          style={{ marginTop: 15, color: "#189AB4" }}
        >
          <Center>
            <TabList>
              <Tab>Lumpsum</Tab>
              <Tab>SIP</Tab>
            </TabList>
          </Center>

          <TabPanels>
            <TabPanel>
              <LumpsumTab />
            </TabPanel>
            <TabPanel>
              <SIPTab />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Center>
  );
};

export default FutureValueCalculator;
