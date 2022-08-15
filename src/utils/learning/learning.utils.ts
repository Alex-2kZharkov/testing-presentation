import { ModuleDto } from "../../types/moduleDto.types";
import { Optional } from "../../types";
import { LearningModuleDto } from "../../types/learningModuleDto.dto";
import {FOUR_WEEKS} from "../../constants";

export const isModuleUnassigned = (
  learningModule: LearningModuleDto,
  assignedModules: Optional<LearningModuleDto[]>
): boolean => {
  const targetModule = assignedModules?.find(
    (assignedModule) => assignedModule?.id === learningModule.id
  );
  return !targetModule;
};

export const getStatusModuleBeforeCompletedTopics = (
  completedTopicsCount: number,
  totalTopicsCount?: number,
  daysPassed?: number
): Optional<ModuleDto.StatusEnum> => {
  if (!totalTopicsCount) {
    return;
  }

  if (completedTopicsCount === 0) {
    return Number(daysPassed) < FOUR_WEEKS
      ? ModuleDto.StatusEnum.New
      : ModuleDto.StatusEnum.ToDo;
  }

  return completedTopicsCount === totalTopicsCount
    ? ModuleDto.StatusEnum.Completed
    : ModuleDto.StatusEnum.InProgress;
};
