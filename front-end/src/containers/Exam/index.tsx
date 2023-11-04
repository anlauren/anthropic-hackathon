import { FileTable } from "../../components/FileTable";
import { UploadComponent } from "../../components/UploadComponent";
import { fakeKnowledgebaseHistory } from "../../fakeData";
import { Grid } from "@chakra-ui/react";

export interface ExamProps {
  examFile: File | null;
  onExamFileChange: (file: File | null) => void;
  onExamFileUpload: () => void;
  onExamDelete?: (fileId: string) => void;
}

export const ExamContainer: React.FC<ExamProps> = ({
  examFile,
  onExamFileChange,
  onExamFileUpload,
  onExamDelete,
}) => {
  return (
    <Grid>
      <UploadComponent
        file={examFile}
        onFileChange={(file) => onExamFileChange(file)}
        onUpload={() => onExamFileUpload()}
      />
      <FileTable
        data={fakeKnowledgebaseHistory}
        onDelete={(fileId) => onExamDelete && onExamDelete(fileId)}
      />
    </Grid>
  );
};
