import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5001", // Replace with the API base URL
});

// Function to fetch alternative questions using axios
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const fetchAlternativeQuestions = async (
  baseQuestionsText: string
): Promise<string> => {
  const { data } = await axiosInstance.get(
    "/question_generator/alternative_questions",
    {
      params: { base_questions_text: baseQuestionsText },
    }
  );
  return data;
};
