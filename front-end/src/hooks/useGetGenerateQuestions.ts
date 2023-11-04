import { useQuery } from "react-query";
import { getAlternativeQuestions } from "../api";

export const useGenerateQuestions = (baseQuestionsText: string) => {
  return useQuery(
    ["generateQuestions", baseQuestionsText],
    () => getAlternativeQuestions(baseQuestionsText),
    {
      enabled: false, // This will prevent the query from running automatically
    }
  );
};
