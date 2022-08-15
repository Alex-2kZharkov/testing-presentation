import {
  getStatusModuleBeforeCompletedTopics,
  isModuleUnassigned,
} from "./learning.utils";
import { ModuleDto } from "../../types";
import { FOUR_WEEKS } from "../../constants";

describe("learning.utils", () => {
  describe("isModuleUnassigned", () => {
    const testModule1 = { id: "test1" };
    const testModule2 = { id: "test2" };

    it("should confirm that module is unassigned", () => {
      expect(isModuleUnassigned(testModule1, [testModule2])).toBeTruthy();
    });

    it("should confirm that module is assigned", () => {
      expect(isModuleUnassigned(testModule1, [testModule1])).toBeFalsy();
    });
  });

  describe("getStatusModuleBeforeCompletedTopics", () => {
    it("should return undefined", () => {
      expect(getStatusModuleBeforeCompletedTopics(1)).toBeUndefined();
    });

    it("should return New status", () => {
      expect(getStatusModuleBeforeCompletedTopics(0, 1, 27)).toBe(
        ModuleDto.StatusEnum.New
      );
    });

    it("should return ToDo status", () => {
      expect(getStatusModuleBeforeCompletedTopics(0, 1, FOUR_WEEKS)).toBe(
        ModuleDto.StatusEnum.ToDo
      );
    });

    it("should return Completed status", () => {
      expect(getStatusModuleBeforeCompletedTopics(1, 1)).toBe(
        ModuleDto.StatusEnum.Completed
      );
    });

    it("should return InProgress status", () => {
      expect(getStatusModuleBeforeCompletedTopics(1, 2)).toBe(
        ModuleDto.StatusEnum.InProgress
      );
    });
  });
});
