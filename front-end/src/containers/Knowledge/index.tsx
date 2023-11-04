import { FileTable } from "../../components/FileTable";
import { UploadComponent } from "../../components/UploadComponent";
import { fakeKnowledgebaseHardwareFundamentals } from "../../fakeData";
import { Grid } from "@chakra-ui/react";

export interface KnowledgeProps {
  knowledgeFile: File | null;
  onKnowledgeFileChange: (file: File | null) => void;
  onKnowledgeFileUpload: () => void;
  onKnowledgeDelete?: (fileId: string) => void;
}

export const KnowledgeContainer: React.FC<KnowledgeProps> = ({
  knowledgeFile,
  onKnowledgeFileChange,
  onKnowledgeFileUpload,
  onKnowledgeDelete,
}) => {
  return (
    <Grid>
      <UploadComponent
        file={knowledgeFile}
        onFileChange={(file) => onKnowledgeFileChange(file)}
        onUpload={() => onKnowledgeFileUpload()}
      />
      <FileTable
        data={fakeKnowledgebaseHardwareFundamentals}
        onDelete={(fileId) => onKnowledgeDelete && onKnowledgeDelete(fileId)}
      />
    </Grid>
  );
};
