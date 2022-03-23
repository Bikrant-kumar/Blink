import { render, screen } from "@testing-library/react";
import BlinkAvatar from ".";

it("Should render Avatar", () => {
  render(<BlinkAvatar letter="A" />);
  const name = screen.getByTestId("avatar");
  expect(name.textContent).toBe("A");
});
