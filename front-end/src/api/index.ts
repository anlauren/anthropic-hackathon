import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5001",
});

export const getAlternativeQuestions = async (
  baseQuestionsText: string
): Promise<string> => {
  const response = await axiosInstance.get(
    "/question_generator/alternative_questions",
    {
      params: { base_questions_text: baseQuestionsText },
    }
  );
  return response.data;
};
