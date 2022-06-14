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
  Text,
} from "@chakra-ui/react";
import { FaCalendar } from "react-icons/fa";
import Head from "next/head";
import StepperInput from "./StepperInput";
import { formatCurrency, TAX_LIMIT } from "../../utils";

const formulajs = require("@formulajs/formulajs");

interface SIPTabProps {}

const SIPTab: React.FunctionComponent<SIPTabProps> = () => {
  const [installments, setInstallments] = React.useState<number>(60);
  const [installmentAmount, setInstallmentAmount] =
    React.useState<number>(15000);
  const [fv, setFV] = React.useState<number>(1800000);
  const [totalInvestedAmount, setTotalInvestedAmount] = React.useState(0);

  const [taxableAmount, setTaxableAmount] = React.useState<number>(0);
  const [profit, setProfit] = React.useState<number>(0);
  const [tax, setTax] = React.useState<number>(0);
  const [rate, setRate] = React.useState<number>(0);

  const handleCalculate = () => {
    let totalInvestedAmount = installments * installmentAmount;
    setTotalInvestedAmount(totalInvestedAmount);
    let profit = fv - Math.abs(totalInvestedAmount);
    setProfit(profit);
    let taxableAmount = 0;
    if (profit > TAX_LIMIT) {
      taxableAmount = profit - TAX_LIMIT;
    }

    setTaxableAmount(taxableAmount);

    // 10% levied if invested time is more than 1 year,
    // 15% levied if invested time is less than 1 year.
    const taxPercetage = installments > 12 ? 10 : 15;
    let tax = (taxableAmount * taxPercetage) / 100;
    setTax(tax);

    const rate = formulajs.ROUND(
      formulajs.RATE(
        installments,
        -Math.abs(installmentAmount),
        0,
        fv,
        1,
        0.1
      ) *
        100 *
        12,
      2
    );

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
          label=" No of Installments"
          id="installments"
          min={0}
          max={240}
          value={installments}
          sliderIcon={FaCalendar}
          onChange={(value: any) => setInstallments(value)}
        />
        <StepperInput
          label="Installment Amount"
          id="instAmt"
          min={0}
          max={100000000}
          value={installmentAmount}
          hideSlider
          onChange={(value: any) => setInstallmentAmount(value)}
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
          <Button colorScheme="blue" onClick={handleCalculate}>
            Calculate
          </Button>

          <Box
            borderWidth="3px"
            borderRadius="lg"
            borderColor="blue.100"
            overflow="auto"
            padding={5}
            style={{ marginTop: 20 }}
          >
            <Grid
              templateRows="repeat(1, 1fr)"
              templateColumns="repeat(1, 1fr)"
              gap={4}
            >
              <HStack>
                <GridItem w="100%" h="10">
                  <FormLabel>Invested Amount</FormLabel>
                </GridItem>

                <GridItem w="100%" h="10" style={{ textAlign: "right" }}>
                  <Box as="span" marginLeft={50}>
                    <Badge colorScheme={"green"}>
                      {formatCurrency(totalInvestedAmount)}
                    </Badge>
                  </Box>
                </GridItem>
              </HStack>

              <HStack>
                <GridItem w="100%" h="10">
                  <FormLabel>{profit < 0 ? "Loss" : "Profit"}</FormLabel>
                </GridItem>

                <GridItem w="100%" h="10" style={{ textAlign: "right" }}>
                  <Box as="span" marginLeft={50}>
                    <Badge colorScheme={profit < 0 ? "red" : "green"}>
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
                    <Badge colorScheme={rate < 0 ? "red" : "green"}>
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
                    <Badge colorScheme="green">
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
                    <Badge colorScheme="green"> {formatCurrency(tax)}</Badge>
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

export default SIPTab;
