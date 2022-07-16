import React from "react";
import {
  Badge,
  Box,
  Button,
  Divider,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Stack,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { FaCalendar, FaArrowAltCircleLeft } from "react-icons/fa";
import Head from "next/head";
import StepperInput from "../StepperInput";
import { formatCurrency, getRate, TAX_LIMIT } from "../../utils";

const formulajs = require("@formulajs/formulajs");

interface LumpsumTabProps {}

const LumpsumTab: React.FunctionComponent<LumpsumTabProps> = () => {
  const [months, setMonths] = React.useState<number>(60);
  const [investedAmount, setInvestedAmount] = React.useState<number>(3000000);
  const [fv, setFV] = React.useState<number>(6000000);

  const [taxableAmount, setTaxableAmount] = React.useState<number>(0);
  const [profit, setProfit] = React.useState<number>(0);
  const [tax, setTax] = React.useState<number>(0);
  const [rate, setRate] = React.useState<number>(0);

  const handleCalculate = () => {
    let profit = fv - Math.abs(investedAmount);
    setProfit(profit);
    let taxableAmount = 0;
    if (profit > TAX_LIMIT) {
      taxableAmount = profit - TAX_LIMIT;
    }

    setTaxableAmount(taxableAmount);

    // 10% levied if invested time is more than 1 year,
    // 15% levied if invested time is less than 1 year.
    const taxPercetage = months > 12 ? 10 : 15;
    let tax = (taxableAmount * taxPercetage) / 100;
    setTax(tax);

    const rate = getRate(months, investedAmount, fv, false);

    setRate(rate);
  };

  return (
    <>
      <Head>
        <title>
          Rate Caculator - Personal Finance app powered by Predifast
        </title>
      </Head>

      <Stack spacing={5}>
        <StepperInput
          label="Months"
          id="months"
          min={0}
          max={240}
          value={months}
          sliderIcon={FaCalendar}
          onChange={(value: any) => setMonths(value)}
        />
        <StepperInput
          label="Investment Amount"
          id="amt"
          min={0}
          max={100000000}
          value={investedAmount}
          hideSlider
          onChange={(value: any) => setInvestedAmount(value)}
        />
        <StepperInput
          label="Future Value"
          id="fv"
          min={-10000000000}
          max={10000000000}
          value={fv}
          hideSlider
          onChange={(value: any) => setFV(value)}
        />

        <Stack>
          <Button colorScheme="teal" onClick={handleCalculate}>
            Calculate
          </Button>

          <Box
            borderWidth="2px"
            borderRadius="lg"
            borderColor="teal.100"
            overflow="auto"
            padding={5}
            style={{ marginTop: 20 }}
            // bg={useColorModeValue("white", "gray.800")}
            // zIndex={1}
            // boxShadow={"2xl"}
          >
            <Grid
              templateRows="repeat(1, 1fr)"
              templateColumns="repeat(1, 1fr)"
              gap={4}
            >
              <HStack>
                <GridItem w="100%" h="10">
                  <FormLabel>{profit < 0 ? "Loss" : "Profit"}</FormLabel>
                </GridItem>

                <GridItem w="100%" h="10" style={{ textAlign: "right" }}>
                  <Box as="span" marginLeft={50}>
                    <Badge
                      colorScheme={profit < 0 ? "red" : "green"}
                      fontSize="1em"
                      rounded={"lg"}
                    >
                      {formatCurrency(profit)}
                    </Badge>
                  </Box>
                </GridItem>
              </HStack>

              <HStack>
                <GridItem w="100%" h="10">
                  <FormLabel>Rate of Return</FormLabel>
                </GridItem>
                <GridItem w="100%" h="10" style={{ textAlign: "right" }}>
                  <Box as="span" marginLeft={50}>
                    <Badge
                      colorScheme={rate < 0 ? "red" : "green"}
                      fontSize="1em"
                      rounded={"lg"}
                    >
                      {rate} %
                    </Badge>
                  </Box>
                </GridItem>
              </HStack>

              <Divider borderColor="blue.200" />

              <HStack>
                <GridItem w="100%" h="10">
                  <FormLabel>Taxable Amout</FormLabel>
                </GridItem>
                <GridItem w="100%" h="10" style={{ textAlign: "right" }}>
                  <Box as="span" marginLeft={50}>
                    <Badge colorScheme="green" fontSize="1em" rounded={"lg"}>
                      {formatCurrency(taxableAmount)}
                    </Badge>
                  </Box>
                </GridItem>
              </HStack>

              <HStack>
                <GridItem w="100%" h="10">
                  <FormLabel>Tax</FormLabel>
                </GridItem>
                <GridItem w="100%" h="10" style={{ textAlign: "right" }}>
                  <Box as="span" marginLeft={50}>
                    <Badge colorScheme="green" fontSize="1em" rounded={"lg"}>
                      {" "}
                      {formatCurrency(tax)}
                    </Badge>
                  </Box>
                </GridItem>
              </HStack>
            </Grid>
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default LumpsumTab;
