import React from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Box,
  Text,
} from "@chakra-ui/react";

interface SliderProps {}

const MySlider: React.FunctionComponent<SliderProps> = () => {
  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
  };
  const [sliderValue, setSliderValue] = React.useState(50);

  return (
    <Box pt={6} pb={2}>
      <Slider aria-label="slider-ex-6" onChange={(val) => setSliderValue(val)}>
        <SliderMark value={25} {...labelStyles}>
          25
        </SliderMark>
        <SliderMark value={50} {...labelStyles}>
          50
        </SliderMark>
        <SliderMark value={75} {...labelStyles}>
          75
        </SliderMark>
        <SliderMark
          value={sliderValue}
          textAlign="center"
          bg="blue.500"
          color="white"
          mt="-10"
          ml="-5"
          w="12"
        >
          {sliderValue}
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
  );
};

export default MySlider;
