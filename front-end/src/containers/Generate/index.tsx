import React, { useState } from "react";
import { Button, Grid, HStack, Skeleton, Spacer } from "@chakra-ui/react";
import { useGenerateQuestions } from "../../hooks/useGetGenerateQuestions";
import { Box, VStack, Text, Heading } from "@chakra-ui/react";
import { generateChatAgentResponse } from "../../api";

export interface GenerateContainerProps {
  myExamQuestion: string;
}

export const GenerateContainer: React.FC<GenerateContainerProps> = ({
  myExamQuestion,
}) => {
  const [isLoadinAnswer, setIsLoadingAnswer] = useState<boolean>(false);
  const { data, isLoading, refetch } = useGenerateQuestions(myExamQuestion); // TODO: fix this
  const [responses, setResponses] = useState<{ [key: number]: string }>({}); // State to hold responses as an object

  const handleButtonClick = () => {
    refetch();
  };

  const handleGenerateResponseClick = async (
    question: string,
    index: number
  ) => {
    setIsLoadingAnswer(true);

    // If we already have the response, do not fetch it again
    if (responses[index]) return;

    try {
      const response = await generateChatAgentResponse(question);
      setResponses((prev) => ({ ...prev, [index]: response }));
    } catch (error) {
      console.error("Failed to generate chat agent response:", error);
    }
    setIsLoadingAnswer(false);
  };

  const questions = data && data.split("\n").filter((q) => q.trim() !== "");
  console.log("isLoadinAnswer", isLoadinAnswer);
  return (
    <Grid p={10}>
      <Button
        colorScheme="teal"
        _active={{ bg: "teale.500" }}
        onClick={handleButtonClick}
        disabled={isLoading}
        isDisabled={isLoading}
        mb={10}
      >
        Generate questions
      </Button>
      {isLoading && (
        <Grid>
          <Skeleton height={50} mt={5} />
          <Skeleton height={50} mt={5} />
          <Skeleton height={50} mt={5} />
          <Skeleton height={50} mt={5} />
        </Grid>
      )}

      {questions && (
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl" mb={4}>
            Generated Questions
          </Heading>
          <VStack spacing={4} align="stretch">
            {questions.map((question, index) => (
              <HStack key={index} spacing={4} justify="" align="center">
                <Text flex="1" p={3} bg="gray.100" borderRadius="md">
                  {question.trim()}
                </Text>
                <Button
                  colorScheme="blue"
                  onClick={() => handleGenerateResponseClick(question, index)}
                  isLoading={responses[index] === "loading"}
                  disabled={!!responses[index]}
                >
                  Generate Answer
                </Button>
                <Spacer />
                {isLoadinAnswer && <Text>GENERATING ANSWERS ...</Text>}
                {responses[index] && (
                  <Text
                    p={3}
                    bg="green.100"
                    borderRadius="md"
                    maxW="400px"
                    ml={4}
                  >
                    {responses[index]}
                  </Text>
                )}
              </HStack>
            ))}
          </VStack>
        </Box>
      )}
    </Grid>
  );
};
