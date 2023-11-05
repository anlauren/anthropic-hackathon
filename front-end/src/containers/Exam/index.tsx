import { FileTable } from "../../components/FileTable";
import { UploadComponent } from "../../components/UploadComponent";
import { fakeExamsHistory } from "../../fakeData";
import { Button, Grid, Textarea } from "@chakra-ui/react";

export interface ExamProps {
  examFile: File | null;
  onTypeExamQuestion: (myString: string) => void;
  onExamFileChange: (file: File | null) => void;
  onExamFileUpload: () => void;
  onExamDelete?: (fileId: string) => void;
  onClickSubmitExam?: () => void;
}

export const ExamContainer: React.FC<ExamProps> = ({
  examFile,
  onTypeExamQuestion,
  onExamFileChange,
  onExamFileUpload,
  onExamDelete,
  onClickSubmitExam,
}) => (
  <Grid>
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      <UploadComponent
        file={examFile}
        onFileChange={(file) => onExamFileChange(file)}
        onUpload={() => onExamFileUpload()}
      />
      <Textarea
        pt={10}
        rows={4} // Set the number of lines you want to show by default
        placeholder="Type your past exam here..."
        onChange={(e) => onTypeExamQuestion(e.target.value)}
      />
      <Grid></Grid>
      <Button colorScheme="teal" onClick={onClickSubmitExam}>
        Submit past exam questions
      </Button>
    </Grid>
    <FileTable
      data={fakeExamsHistory}
      onDelete={(fileId) => onExamDelete && onExamDelete(fileId)}
    />
  </Grid>
);
