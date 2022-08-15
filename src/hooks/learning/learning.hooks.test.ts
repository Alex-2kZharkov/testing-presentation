import { renderHook } from "@testing-library/react";
import { useLearningModuleId } from "./learning.hooks";

const pathname = "testId";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({ pathname }),
}));

describe("learning.hooks", () => {
  describe("useLearningModuleId", () => {
    it("should return current learning module id", () => {
      const { result } = renderHook(() => useLearningModuleId());

      expect(result.current).toBe(pathname);
    });
  });
});
