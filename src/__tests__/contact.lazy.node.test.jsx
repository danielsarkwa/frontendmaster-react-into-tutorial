import { render } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import createFetchMock from "vitest-fetch-mock";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"; // this is used to create a fake client for the us to test the query
import { Route } from "../routes/contact.lazy";

const queryClient = new QueryClient();

// vi acts like a spy log
const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

test("can submit contact form", async () => {
  // define the api response
  fetchMocker.mockResponse(JSON.stringify({ status: "ok" }));

  const screen = render(
    <QueryClientProvider client={queryClient}>
      {/* the route has both the component and other things the tanstack route has but we just want to extract the component */}
      <Route.options.component />
    </QueryClientProvider>,
  );

  const nameInput = screen.getByPlaceholderText("Name");
  const emailInput = screen.getByPlaceholderText("Email");
  const msgTextArea = screen.getByPlaceholderText("Message");

  const testData = {
    name: "Daniel",
    email: "danie@mail.com",
    message: "Just a simple message",
  };

  nameInput.value = testData.name;
  emailInput.value = testData.email;
  msgTextArea.value = testData.message;

  const btn = screen.getByRole("button");

  btn.click();

  // the test will wait until the code renders this
  const h3 = await screen.findByRole("heading", { level: 3 });

  expect(h3.innerHTML).contain("Submitted!");

  const requests = fetchMocker.requests();
  expect(requests.length).toBe(1);
  expect(requests[0].url).toBe("/api/contact");
  expect(fetchMocker).toHaveBeenCalledWith("/api/contact", {
    body: JSON.stringify(testData),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
});
