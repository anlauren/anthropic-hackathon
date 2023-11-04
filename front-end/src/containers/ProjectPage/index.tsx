import { Grid } from "@chakra-ui/react";
import { UploadComponent } from "../../components/UploadComponent";
import { useState } from "react";

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

  return (
    <Grid>
      <UploadComponent
        file={file}
        onFileChange={(file) => handleFileChange(file)}
        onUpload={handleFileUpload}
      />
    </Grid>
  );
};
