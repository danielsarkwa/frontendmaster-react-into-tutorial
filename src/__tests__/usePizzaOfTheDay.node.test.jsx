import { expect, test, vi } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import createFetchMock from "vitest-fetch-mock";
import { usePizzaOfTheDay } from "../usePizzaOfTheDay";

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

const testPizza = {
  id: "calabrese",
  name: "The Calabrese Pizza",
  category: "Supreme",
  description:
    "Salami, Pancetta, Tomatoes, Red Onions, Friggitello Peppers, Garlic",
  image: "/public/pizzas/calabrese.webp",
  sizes: { S: 12.25, M: 16.25, L: 20.25 },
};

// this renders a component for the hook to be called
// function getPizzaOfTheDay() {
//   let pizza;

//   function TestComponent() {
//     pizza = usePizzaOfTheDay();
//     return null;
//   }

//   render(<TestComponent />);

//   return pizza;
// }

test("gives null when first called", async () => {
  fetch.mockResponseOnce(JSON.stringify(testPizza));
  const { result } = renderHook(() => usePizzaOfTheDay()); // renders our hook and returns the return value of the hook
  expect(result.current).toBeNull();
});

test("to call the API anf give back the pizza of the day", async () => {
  fetch.mockResponseOnce(JSON.stringify(testPizza));
  const { result } = renderHook(() => usePizzaOfTheDay());
  await waitFor(() => {
    // this tries the code over and over until it does not fail
    // basically waits until the state of the the hook changes
    // this waits for the hook to return data
    expect(result.current).toEqual(testPizza);
  });
  expect(fetchMocker).toHaveBeenCalledWith("/api/pizza-of-the-day");
});
