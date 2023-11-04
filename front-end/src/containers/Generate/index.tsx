import React from "react";
import { Button, Grid } from "@chakra-ui/react";
import { useGenerateQuestions } from "../../hooks/useGetGenerateQuestions";

export const GenerateContainer: React.FC = () => {
  const { data, refetch } = useGenerateQuestions(""); // Pass the initial question text here or manage it via component state

  const handleButtonClick = () => {
    refetch(); // This will trigger the query to run
  };

  console.log(data);

  return (
    <Grid p={10}>
      <Button
        bg="teal.400"
        _hover={{ bg: "teale.500" }}
        onClick={handleButtonClick}
      >
        Generate questions
      </Button>
      {/* You can add more UI elements here to display the generated questions */}
    </Grid>
  );
};
