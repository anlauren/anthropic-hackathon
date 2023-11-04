import { Flex, Grid, Input } from "@chakra-ui/react";
import { FileTable } from "../../components/FileTable";
import { UploadComponent } from "../../components/UploadComponent";
import { fakeKnowledgebaseHistory } from "../../fakeData";

export interface ExamProps {
  examFile: File | null;
  onTypeExamQuestion: (myString: string) => void;
  onExamFileChange: (file: File | null) => void;
  onExamFileUpload: () => void;
  onExamDelete?: (fileId: string) => void;
}

export const ExamContainer: React.FC<ExamProps> = ({
  examFile,
  onTypeExamQuestion,
  onExamFileChange,
  onExamFileUpload,
  onExamDelete,
}) => (
  <Grid>
    <Flex alignItems="center" justifyContent="space-between">
      <UploadComponent
        file={examFile}
        onFileChange={(file) => onExamFileChange(file)}
        onUpload={() => onExamFileUpload()}
      />
      <Input
        onChange={(e) => onTypeExamQuestion(e.target.value)}
        width="auto"
        flex="1"
        marginLeft="4"
      />
    </Flex>
    <FileTable
      data={fakeKnowledgebaseHistory}
      onDelete={(fileId) => onExamDelete && onExamDelete(fileId)}
    />
  </Grid>
);
