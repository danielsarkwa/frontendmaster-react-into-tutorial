import { render } from "vitest-browser-react";
import { expect, test } from "vitest";
import Pizza from "../Pizza";

test("alt test renders on image", async () => {
  const name = "My favirite pizza";
  const src = "https://picsum.photos/200";
  const screen = render(
    <Pizza name={name} description="cool browser stuff" image={src} />,
  );

  const img = await screen.getByRole("img"); // get the image from the rendered component using screen
  
  // this is actually goes into the browser and gets the stuff
  await expect.element(img).toBeInTheDocument();
  await expect.element(img).toHaveAttribute("src", src);
  await expect.element(img).toHaveAttribute("alt", name); // in the component, we have set the component to use the props.name for the alt
});
