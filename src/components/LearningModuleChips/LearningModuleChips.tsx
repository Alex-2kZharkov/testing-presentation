import { FC, ReactNode } from "react";
import { Chip } from "@material-ui/core";

interface CategoryChipProps {
  label: string | ReactNode[];
  className?: string;
}

interface LearningGroupChipProps {
  learningModule: { groups: string[] };
  className?: string;
  showStatus?: boolean;
}

export const CategoryChip: FC<CategoryChipProps> = ({ label, className }) => (
  <Chip className={className} label={label} />
);

export const LearningGroupChips: FC<{
  group: string;
}> = ({ group }) => <CategoryChip label={group} />;

export const LearningModuleChips: FC<LearningGroupChipProps> = ({
  learningModule,
}) => {
  return (
    <div>
      <CategoryChip label="New label" />

      {learningModule.groups.map((group) => (
        <LearningGroupChips key={group} group={group} />
      ))}
    </div>
  );
};
