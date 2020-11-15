import Card from "./Card";
import App from "../App";

import "@testing-library/jest-dom";
import { render, screen, fireEvent, act } from "@testing-library/react";

test("renders without crashing", async () => {
  render(<Card />);
});

test("Doesn't show the decision buttons when the page loads", () => {
  render(<Card />);

  const heartButton = screen.queryByText("❤️");
  const unHeartButton = screen.queryByText("💔");

  expect(heartButton).toBeNull();
  expect(unHeartButton).toBeNull();
});

test("renders the logo when the page loads", () => {
  render(<Card />);

  const logo = screen.queryByAltText(/logo/);
  expect(logo).toBeInTheDocument();
});

test("Shows a dog image when the 'Next Dog' button is pressed", async () => {
  render(<App />);

  await act(() => {
    fireEvent.click(screen.getByText("Next Dog"));
  });

  const dogImage = screen.queryByAltText("dog");

  expect(dogImage).toBeInTheDocument();
});

it("unmounts the dog image if the user 💔s the dog", async () => {
  render(<App />);

  await act(() => {
    fireEvent.click(screen.getByText("Next Dog"));
  });

  await act(() => {
    fireEvent.click(screen.getByText("💔"));
  });
  const dogImage = screen.queryByAltText("dog");

  expect(dogImage).toBeNull();
});

it("unmounts the dog image if the user ❤️s the dog", async () => {
  render(<App />);

  fireEvent.click(screen.getByText("Next Dog"));
  fireEvent.click(screen.getByText("❤️"));
  const dogImage = screen.queryByAltText("dog");

  expect(dogImage).toBeNull();
});

//TODO
// it("Renders the matched dog when the loved dog is matched");

// it("Makes sure the same name is not used twice");

// it("When matched, the previous dog image is rendered");
