// snapshot testing renders a components and when the component changes it fails the test
// this will create the snapshot of the actual component when you run it and keep it so when the component changes in the future it will fail
// it's ui component testing
// it's also for object testing, or even test object data from backend

import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import Cart from "../Cart";

test("snapshot with nothing in cart", () => {
  const { asFragment } = render(<Cart cart={[]} />);
  expect(asFragment()).toMatchSnapshot();
});
