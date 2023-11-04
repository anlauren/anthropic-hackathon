import { Grid } from "@chakra-ui/react";
import { useGetGenerateQuestion } from "../../hooks/getGenerateQuestions";

export const GenerateContainer: React.FC = () => {
  const { data } = useGetGenerateQuestion("baseQuestionsText");
  console.log(data);

  return <Grid>fdsfds</Grid>;
};
