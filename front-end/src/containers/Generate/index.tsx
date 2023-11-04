import React from "react";
import { Button, Grid, Skeleton } from "@chakra-ui/react";
import { useGenerateQuestions } from "../../hooks/useGetGenerateQuestions";
import { Box, VStack, Text, Heading, Divider } from "@chakra-ui/react";

export interface GenerateContainerProps {
  myExamQuestion: string;
}

export const GenerateContainer: React.FC<GenerateContainerProps> = ({
  myExamQuestion,
}) => {
  const { data, isLoading, refetch } = useGenerateQuestions(myExamQuestion); // TODO: fix this

  const handleButtonClick = () => {
    refetch();
  };

  const questions = data && data.split("\n").filter((q) => q.trim() !== "");

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
          <VStack divider={<Divider />} spacing={4} align="stretch">
            {questions.map((question, index) => (
              <Text key={index} p={3} bg="gray.100" borderRadius="md">
                {question.trim()}
              </Text>
            ))}
          </VStack>
        </Box>
      )}
    </Grid>
  );
};
