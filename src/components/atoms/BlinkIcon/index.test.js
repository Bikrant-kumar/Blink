import { render, screen } from "@testing-library/react";
import BlinkIcon from ".";
import Icon from "../../../assets/images/icon"

it("should render Icon", () => {
  render(
    <BlinkIcon
      width="18"
      height="18"
      viewBox="0 0 18 18"
      d={Icon.timeIcon}
    />
  );
  const blinkIcon = screen.getByTestId(/blink-Icon/i);
  expect(blinkIcon).toBeInTheDocument();
});
