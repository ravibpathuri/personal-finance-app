import { Button, Grid, GridItem, Input, Stack, Text } from "@chakra-ui/react";
import React from "react";
import MySlider from "./MySlider";
import StepperInput from "./StepperInput";
import { useFormik, Field } from "formik";
import * as yup from "yup";
import { FaAirbnb, FaCalendar, FaChartLine, FaMoneyBill } from "react-icons/fa";

interface LumpsumTabProps {}

const LumpsumTab: React.FunctionComponent<LumpsumTabProps> = () => {
  const [value, setValue] = React.useState("");
  const validate = yup.object().shape({
    years: yup.number().required(),
    months: yup.number().required().positive().integer(),
    amountInvested: yup.string().email(),
    estimatedProfit: yup.string().url(),
  });

  const formik = useFormik({
    initialValues: {
      years: "",
      months: "",
      amountInvested: "",
      estimatedProfit: "",
    },
    validationSchema: validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Stack spacing={5}>
      <StepperInput
        id="year"
        min={0}
        max={100}
        label="Number of Years"
        value={10}
        onChange={(value: any) => {
          setValue(value);
          console.log(value);
        }}
        //onChange={onchange}
        isDisabled={false} // number input will be disabled
        hideSlider
        sliderIcon={FaCalendar} //sets an icon on slider handle
        sliderIconSize={5} //sets the slider handle icon size
        sliderTrackColor="red.200" //sets the undragged portion slider track colour
        numberInputPlaceholder="Enter Number of Years"
      />

      <StepperInput
        min={0}
        max={120}
        value1={0}
        value2={60}
        value3={120}
        label="Number of Months"
        value={25}
        onChange={(value: any) => {
          setValue(value);
          console.log(value);
        }}
        sliderIcon={FaAirbnb}
        sliderIconSize={5}
        inputMin={0} //sets min value that a slider & input can have
        inputMax={120} //sets min value that a slider & input can have
      />
      {/* <MySlider /> */}
      <StepperInput
        min={0}
        max={1000000}
        value1="0 K"
        value2="500K"
        value3="1000K"
        label="Amount Invested"
        value={25}
        sliderIcon={FaMoneyBill}
        sliderIconSize={5}
        inputMin={0} //sets min value that a slider & input can have
        inputMax={1000000} //sets min value that a slider & input can have
        step={5000}
        symbol="[₹]"
      />
      <StepperInput
        min={0}
        max={100}
        value1={0}
        value2={50}
        value3={100}
        label="Estimated Profit"
        value={25}
        sliderIconSize={5}
        sliderIcon={FaChartLine}
        inputMin={0} //sets min value that a slider & input can have
        inputMax={100} //sets min value that a slider & input can have
        symbol="[%]"
      />
      <div style={{ marginTop: 50 }}>
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          <GridItem>
            <Text>Capital Gain Tax</Text>
          </GridItem>
          <GridItem>
            <Input htmlSize={4} width="auto" isReadOnly />
          </GridItem>
          <GridItem>
            <Text>Return Interest %</Text>
          </GridItem>
          <GridItem>
            <Input htmlSize={4} width="auto" isReadOnly />
          </GridItem>
        </Grid>
      </div>
      <Button>Calculate</Button>
    </Stack>
  );
};

export default LumpsumTab;
