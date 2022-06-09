import { Box, Button, Divider, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaCalendar } from "react-icons/fa";
import Head from "next/head";
import StepperInput from "./StepperInput";
import { formatCurrency, TAX_LIMIT } from "../../utils";

const formulajs = require("@formulajs/formulajs");

interface LumpsumTabProps {}

const LumpsumTab: React.FunctionComponent<LumpsumTabProps> = () => {
  const [months, setMonths] = React.useState<number>(50);
  const [investedAmount, setInvestedAmount] = React.useState<number>(3000000);
  const [fv, setFV] = React.useState<number>(6000000);

  const [taxableAmount, setTaxableAmount] = React.useState<number>(0);
  const [tax, setTax] = React.useState<number>(0);
  const [rate, setRate] = React.useState<number>(0);

  const handleCalculate = () => {
    let profit = fv - Math.abs(investedAmount);
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

    const profitAfterTx = profit - tax;
    const fvAfterTax = investedAmount + profitAfterTx;
    const rate = formulajs.ROUND(
      formulajs.RATE(months, 0, -Math.abs(investedAmount), fv, 0, 0) * 100 * 12,
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
          <Button colorScheme="blue" onClick={handleCalculate}>
            Calculate
          </Button>
          <HStack>
            <Text>Profit</Text>
            <Box as="span" marginLeft={50}>
              {formatCurrency(fv - Math.abs(investedAmount))}
            </Box>
          </HStack>
          <HStack>
            <Text>Rate of Return</Text>
            <Box as="span" marginLeft={50}>
              {rate} %
            </Box>
          </HStack>
          <Divider />
          <HStack>
            <Text>Taxable Amout on Profit</Text>
            <Box as="span" marginLeft={50}>
              {formatCurrency(taxableAmount)}
            </Box>
          </HStack>
          <HStack>
            <Text>Tax</Text>
            <Box as="span" marginLeft={50}>
              {formatCurrency(tax)}
            </Box>
          </HStack>
        </Stack>
      </Stack>
    </>
  );
};

export default LumpsumTab;
