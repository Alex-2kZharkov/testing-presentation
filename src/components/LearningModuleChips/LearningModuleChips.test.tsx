import { render, screen } from "@testing-library/react";
import { LearningModuleChips } from "./LearningModuleChips";

const LEARNING_MODULE = {
  groups: ["string1"],
};

describe("features/Learning/LearningModuleChips", () => {
  it("should render component", () => {
    render(<LearningModuleChips learningModule={LEARNING_MODULE} />);

    const labelTopic = screen.getByText("New label");
    const groupsContent = screen.getByText(LEARNING_MODULE.groups[0] as string);

    expect(labelTopic).toBeInTheDocument();
    expect(groupsContent).toBeInTheDocument();
  });
});
