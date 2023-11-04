import { useQuery } from "react-query";
import { fetchAlternativeQuestions } from "../api";

export const useGetGenerateQuestion = (baseQuestionsText: string) => {
  return useQuery<string, Error>(
    ["alternativeQuestions", baseQuestionsText],
    () => fetchAlternativeQuestions(baseQuestionsText),
    {
      enabled: !!baseQuestionsText, // The query will not execute until the baseQuestionsText is truthy
      // Add any additional options or configurations here
    }
  );
};
