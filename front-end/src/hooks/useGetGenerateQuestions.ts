// query.ts
import { useQuery } from "react-query";
import { getAlternativeQuestions } from "../api"; // Adjust the import path as needed

export const useGenerateQuestions = (baseQuestionsText: string) => {
  // Destructure the `isLoading` from the useQuery return value to manage loading state
  const { data, isLoading, refetch } = useQuery(
    ["generateQuestions", baseQuestionsText],
    () => getAlternativeQuestions(baseQuestionsText),
    {
      enabled: false, // Prevents the query from running automatically
    }
  );

  return { data, isLoading, refetch };
};
