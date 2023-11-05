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

export const uploadKnowledgeBase = async (
  knowledgeBase: File
): Promise<string> => {
  const formData = new FormData();
  formData.append("knowledge", knowledgeBase);

  try {
    const response = await axiosInstance.post("/knowledge/new", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Upload error:", error);
    throw error;
  }
};


export const generateChatAgentResponse = async (userInput: string): Promise<string> => {
  try {
    const response = await axiosInstance.post("/agent/chat-agent", null, {
      params: { user_input: userInput }
    });
    return response.data;
  } catch (error) {
    console.error("Error generating chat agent response:", error);
    throw error;
  }
};

