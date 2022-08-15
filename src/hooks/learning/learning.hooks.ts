import { Optional } from "../../types";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export const useLearningModuleId = (): Optional<string> => {
  const location = useLocation();
  const [moduleId, setModuleId] = useState<Optional<string>>();

  useEffect(() => setModuleId(location.pathname), [location]);

  return moduleId;
};
