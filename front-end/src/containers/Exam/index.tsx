import { FileTable } from "../../components/FileTable";
import { UploadComponent } from "../../components/UploadComponent";
import { fakeKnowledgebase } from "../../fakeData";
import { Grid } from "@chakra-ui/react";

export interface ExamProps {
  examFile: File | null;
  onExamFileChange: (file: File | null) => void;
  onExamFileUpload: () => void;
  onExamDelete?: (fileId: string) => void;
}

export const KnowledgeContainer: React.FC<ExamProps> = ({
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
        data={fakeKnowledgebase}
        onDelete={(fileId) => onExamDelete && onExamDelete(fileId)}
      />
    </Grid>
  );
};
