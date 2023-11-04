import { FileTable } from "../../components/FileTable";
import { UploadComponent } from "../../components/UploadComponent";
import { fakeKnowledgebaseHistory } from "../../fakeData";
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
    </Grid>
    <Button onClick={onClickSubmitExam}>Submit exam</Button>
    <FileTable
      data={fakeKnowledgebaseHistory}
      onDelete={(fileId) => onExamDelete && onExamDelete(fileId)}
    />
  </Grid>
);
