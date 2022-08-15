import { render, screen, waitFor } from "@testing-library/react";
import { ComponentWithMockedApi } from "./ComponentWithMockedApi";
import axios from "axios";

const facts = [
  {
    fact: "Unlike dogs, cats do not have a sweet tooth. Scientists believe this is due to a mutation in a key taste receptor.",
    length: 114,
  },
  {
    fact: "When a cat chases its prey, it keeps its head level. Dogs and humans bob their heads up and down.",
    length: 97,
  },
];

jest.mock("axios", () => ({
  ...jest.requireActual("axios"),
  get: jest.fn().mockResolvedValue(facts),
}));

describe("ComponentWithMockedApi", () => {
  it("should display list of facts", async () => {
    render(<ComponentWithMockedApi />);

    expect(
      screen.getByText(/Hello, facts/, { exact: false })
    ).toBeInTheDocument();

    expect(
      await screen.findByText(/Unlike dogs/, { exact: false })
    ).toBeInTheDocument();

    expect(
      await screen.findByText(/When a cat/, { exact: false })
    ).toBeInTheDocument();
  });
});
