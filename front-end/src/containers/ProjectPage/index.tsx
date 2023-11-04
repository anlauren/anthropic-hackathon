import { Grid } from "@chakra-ui/react";
import { UploadComponent } from "../../components/UploadComponent";
import { useState } from "react";
import { FileTable } from "../../components/FileTable";
import { fakeKnowledgebase } from "../../fakeData";

export const ProjectPage = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (file: File | null) => {
    if (file) {
      setFile(file);
    }
  };

  const handleFileUpload = () => {
    console.log(file);
  };

  const handleDelete = (fileId: string) => {
    alert(fileId);
  };

  return (
    <Grid p={6}>
      <UploadComponent
        file={file}
        onFileChange={(file) => handleFileChange(file)}
        onUpload={handleFileUpload}
      />
      <FileTable
        data={fakeKnowledgebase}
        onDelete={(fileId) => handleDelete(fileId)}
      />
    </Grid>
  );
};
