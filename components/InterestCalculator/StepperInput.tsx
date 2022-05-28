import * as React from "react";
import numeral from "numeral";
import {
  NumberInput,
  NumberInputField,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
  SliderMark,
  Stack,
  HStack,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";

// import "fa-icons";
// import { FaCalendar } from "react-icons/fa";
// import { PhoneIcon } from "@chakra-ui/icons";

interface StepperInputProps {
  id: string;
  min: number;
  max: number;
  value?: number;

  label: string;
  onChange?: Function;
  isDisabled?: boolean;

  labelColor?: any;
  labelFontSize?: any;
  labelStyle?: any;
  symbol?: any;

  hideSlider?: boolean;
  sliderIcon?: any;
  sliderIconColor?: any;
  sliderIconSize?: any;
  SliderColorScheme?: any;
  sliderTrackColor?: any;
  sliderMarkColor?: any;
  step?: number;

  hideInputBox?: boolean;
  numberInputSize?: any;
  numberInputVarient?: any;
  numberInputColor?: any;
  numberInputPlaceholder?: any;
  numberInputBgColor?: any;
}

type changeType = {
  value: any;
  changeBy: "slider" | "input";
};

const StepperInput: React.FunctionComponent<StepperInputProps> = (props) => {
  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
  };

  const [value, setValue] = React.useState<number>(props.value ?? 0);
  const [foucsSlider, setFocusSlider] = React.useState(true);
  const [foucsInputbox, setFoucsInputbox] = React.useState(false);

  const handleValue = ({ value, changeBy }: changeType) => {
    setValue(value);
    setFocusSlider(changeBy === "slider");
    setFoucsInputbox(changeBy === "input");
    if (props.onChange) {
      props.onChange(value);
    }
  };

  const handleSliderChange = (value: any) => {
    handleValue({ value, changeBy: "slider" });
  };

  const handleInputboxChange = (value: any) => {
    handleValue({ value, changeBy: "input" });
  };

  return (
    <Stack spacing={4} align="stretch">
      <Box borderWidth="1px" borderRadius="lg" overflow="auto" padding={5}>
        <HStack gap={10}>
          <FormControl>
            <FormLabel
              color={props.labelColor}
              fontSize={props.labelFontSize}
              as={props.labelStyle}
              htmlFor={props.id}
            >
              {props.label} {props.symbol}
            </FormLabel>
            <NumberInput
              id={props.id}
              data-testid={`input-${props.id}`}
              maxW="md"
              w="100%"
              value={value}
              onChange={handleInputboxChange}
              isDisabled={props.isDisabled}
              isReadOnly={props.isDisabled}
              hidden={props.hideInputBox}
              size={props.numberInputSize}
              variant={props.numberInputVarient}
              min={props.min}
              max={props.max}
              bg={props.numberInputBgColor}
              focusInputOnChange={foucsInputbox}
            >
              <NumberInputField
                color={props.numberInputColor}
                placeholder={props.numberInputPlaceholder}
              ></NumberInputField>
            </NumberInput>
          </FormControl>
        </HStack>

        <Slider
          flex="1"
          value={value}
          onChange={handleSliderChange}
          focusThumbOnChange={foucsSlider}
          min={props.min}
          max={props.max}
          step={props.step}
          isDisabled={props.isDisabled}
          hidden={props.hideSlider}
          isReadOnly={props.isDisabled}
          colorScheme={props.SliderColorScheme}
        >
          <div data-testid={`slider-${props.id}`}>
            <SliderMark
              value={props.min}
              {...labelStyles}
              color={props.sliderMarkColor}
            >
              {props.min}
            </SliderMark>
            <SliderMark value={props.max * 0.8} {...labelStyles}>
              {numeral(props.max).format("0,0[.]00")}
            </SliderMark>
            <SliderTrack bg={props.sliderTrackColor}>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb fontSize="sm" boxSize="32px" data-testid="slider">
              <Box
                boxSize={props.sliderIconSize}
                as={props.sliderIcon}
                color={props.sliderIconColor}
              ></Box>
            </SliderThumb>
          </div>
        </Slider>
      </Box>
    </Stack>
  );
};

export default StepperInput;
