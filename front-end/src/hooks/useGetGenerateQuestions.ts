// query.ts
import { useQuery } from "react-query";
import { getAlternativeQuestions,  generateChatAgentResponse} from "../api"; // Adjust the import path as needed

export const useGenerateQuestions = (baseQuestionsText: string) => {
  const { data, isLoading, refetch } = useQuery(
    ["generateQuestions", baseQuestionsText],
    () => getAlternativeQuestions(baseQuestionsText),
    {
      enabled: false, // Prevents the query from running automatically
    }
  );

  return { data, isLoading, refetch };
};


export const useAgentResponse = (user_input: string) => {
  const { data, isLoading, refetch } = useQuery(
    ["agentResponse", user_input],
    () => generateChatAgentResponse(user_input),
    {
      enabled: false, // Prevents the query from running automatically
    }
  );

  return { data, isLoading, refetch };
}