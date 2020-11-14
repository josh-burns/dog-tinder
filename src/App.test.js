import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "./App";

test("renders app component", () => {
  render(<App />);
});

it("renders correctly", () => {
  const tree = renderer.create(<App></App>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("Doesn't show a dog image when the page renders");

it("Shows a dog image when the 'Next Dog' button is pressed");

it("unmounts the dog image if the user 💔s the dog");
it("unmounts the dog image if the user ❤️s the dog");

it("Renders the matched dog when the loved dog is matched");

it("Makes sure the same name is not used twice");

it("When matched, the previous dog image is rendered");
