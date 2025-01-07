// this can be run in the browser workspace but we can keep it in the node environment and use happy dom

import { render, cleanup } from "@testing-library/react";
import { expect, test, afterEach } from "vitest";
import Pizza from "../Pizza";

afterEach(cleanup);

 

test("to have default image if none is provided", async () => {
  const screen = render(
    <Pizza name="something else" description="super cool pizza" />,
  );

  const img = screen.getByRole("img");
  expect(img.src).not.toBe("");
});
