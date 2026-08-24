import { NavClock } from "../NavBar/NavClock.tsx";
import { render } from "@testing-library/react";
import { expect } from "vitest";

describe("NavClock", () => {
  test("renders a static clock", () => {
    const renderedComponent = render(<NavClock />);
    const clockContent = renderedComponent.getByTestId("nav-clock");
    expect(clockContent).toBeVisible();
    expect(clockContent.textContent).toBe("08:36");
  });
});
