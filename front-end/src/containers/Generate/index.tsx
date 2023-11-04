import React from "react";
import { Button, Grid, Skeleton } from "@chakra-ui/react";
import { useGenerateQuestions } from "../../hooks/useGetGenerateQuestions";

export const GenerateContainer: React.FC = () => {
  const { data, isLoading, refetch } = useGenerateQuestions("fdfdfd");

  const handleButtonClick = () => {
    refetch();
  };

  console.log("data", data);
  console.log("isLoading", isLoading);

  return (
    <Grid p={10}>
      <Button
        bg="teal.400"
        _active={{ bg: "teale.500" }}
        onClick={handleButtonClick}
        disabled={isLoading}
        isDisabled={isLoading}
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
    </Grid>
  );
};
