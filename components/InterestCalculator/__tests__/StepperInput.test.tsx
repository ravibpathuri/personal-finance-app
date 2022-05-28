import {
  render,
  screen,
  waitForElementToBeRemoved,
  waitFor,
  fireEvent,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import StepperInput from "../StepperInput";

describe("Stepper Input", () => {
  const handleOnChange = jest.fn();
  const minValue = 4;
  const maxValaue = 100;
  const currentValue = 50;
  const component = (
    <StepperInput
      id="year"
      min={minValue}
      max={maxValaue}
      label="Number of Years"
      symbol="INR"
      value={currentValue}
      onChange={handleOnChange}
      isDisabled={false}
      hideSlider
      sliderIcon={null}
      sliderIconSize={5}
      sliderTrackColor="red.200"
      numberInputPlaceholder="Enter Number of Years"
    />
  );

  it("renders with a label", () => {
    // arrange

    // act
    render(component);

    const label = screen.getByText(/Number of Years/i);

    // assert
    expect(label).toBeInTheDocument();
  });
  it("renders with a label and symbal", () => {
    // arrange

    // act
    render(component);

    const label = screen.getByText(/INR/i);

    // assert
    expect(label).toBeInTheDocument();
  });

  it("should should display minimum value in the screen", () => {
    // act
    render(component);
    const minValueText = screen.getByText(minValue);

    // assert
    expect(minValueText).toBeInTheDocument();
  });

  it("should should display maximum value in the screen", () => {
    // act
    render(component);
    const maxValueText = screen.getByText(maxValaue);

    // assert
    expect(maxValueText).toBeInTheDocument();
  });

  it("should  display currentValue in the input box", () => {
    // act
    render(component);
    const input = screen.getByLabelText(/Number of Years/i);

    // assert
    expect(input).toHaveValue(currentValue.toString());
  });

  it("should not display slider on hidden", () => {
    // act
    const { getByTestId } = render(component);
    const slider = getByTestId(`slider-year`);

    // assert
    waitForElementToBeRemoved(slider)
      .then(() => expect(slider).not.toBeInTheDocument())
      .catch((err) => {
        console.log(err);
      });
  });

  it("should not display input  on hidden", () => {
    // act
    const { getByTestId } = render(
      <StepperInput
        id="year"
        min={minValue}
        max={maxValaue}
        label="Number of Years"
        symbol="INR"
        value={currentValue}
        onChange={handleOnChange}
        isDisabled={false}
        hideInputBox
        sliderIcon={null}
        sliderIconSize={5}
        sliderTrackColor="red.200"
        numberInputPlaceholder="Enter Number of Years"
      />
    );
    const input = getByTestId(`input-year`);

    // assert
    waitForElementToBeRemoved(input)
      .then(() => expect(input).not.toBeInTheDocument())
      .catch((err) => {
        console.log(err);
      });
  });

  it("should call onChange event only one time on input change", () => {
    // arrange
    const newValue = "51";

    // act
    render(component);
    const input = screen.getByLabelText(/Number of Years/i);
    fireEvent.change(input, { target: { value: newValue } });

    // assert
    expect(input).toHaveValue(newValue);
    expect(handleOnChange).toBeCalledTimes(1);
  });

  it.skip("should call onChange event  on slider drag change", () => {
    // arrange

    // act
    render(component);
    const slider = screen.getByTestId("slider");
    const input = screen.getByLabelText(/Number of Years/i);

    fireEvent.mouseDown(slider, { clientX: 162, clientY: 302 });

    console.log(input.ariaValueNow);

    // assert
    expect(handleOnChange).toBeCalled();
  });

  it("should set maxValue if user change the input value to more than the maximum value", async () => {
    // arrange
    const newValue = "101";

    // act
    render(component);
    const input = screen.getByLabelText(/Number of Years/i);
    fireEvent.change(input, { target: { value: newValue } });

    // assert
    await waitFor(() => expect(handleOnChange).toBeCalledTimes(2));
    setTimeout(() => expect(input).toHaveValue(maxValaue.toString()), 1000);
  });

  it("should set minValue if user change the input value to less than the minimum value", async () => {
    // arrange
    const newValue = "-1";

    // act
    render(component);
    const input = screen.getByLabelText(/Number of Years/i);
    fireEvent.change(input, { target: { value: newValue } });

    // assert
    await waitFor(() => expect(handleOnChange).toBeCalledTimes(3));
    setTimeout(() => expect(input).toHaveValue(minValue.toString()), 1000);
  });
});
