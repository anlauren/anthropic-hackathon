import React, { useRef, useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text,
  useToast,
} from "@chakra-ui/react";

export const UploadComponent = () => {
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const toast = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setFile(files[0]);
    }
  };

  const handleUpload = () => {
    if (file) {
      // Handle the file upload process here
      console.log("Uploading:", file);
      // Display a toast notification
      toast({
        title: "File uploaded.",
        description: "We've uploaded your file.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: "No file selected.",
        description: "Please select a file to upload.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <VStack spacing={4}>
      <FormControl>
        <FormLabel>Upload File</FormLabel>
        <Input
          ref={inputRef}
          type="file"
          hidden // Hide the default input
          onChange={handleFileChange}
        />
        <Button
          onClick={() => inputRef.current?.click()} // Delegate click to the hidden input
          leftIcon={<UploadIcon />} // Replace with actual icon
        >
          {file ? file.name : "Choose file"}
        </Button>
      </FormControl>
      <Button colorScheme="blue" onClick={handleUpload} isDisabled={!file}>
        Upload
      </Button>
      {file && <Text>File selected: {file.name}</Text>}
    </VStack>
  );
};
