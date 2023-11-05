import React, { useRef, useState } from "react";
import {
  Button,
  VStack,
  Text,
  useToast,
  Box,
  IconButton,
  Center,
} from "@chakra-ui/react";
import { AttachmentIcon } from "@chakra-ui/icons";
import { uploadKnowledgeBase } from "../../api";

export interface UploadComponentProps {
  file: File | null;
  onFileChange: (file: File | null) => void; // Renamed for clarity
  onUpload: () => void; // Assuming you want to handle the upload process in the parent component
}

export const UploadComponent: React.FC<UploadComponentProps> = ({
  file,
  onFileChange,
  // onUpload,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const toast = useToast();
  const [isLoading, setLoading] = useState<boolean>(false);

  // This function is a thin wrapper around the passed in `onFileChange`
  // to handle the null check and only pass a File if one exists.
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    onFileChange(files ? files[0] : null); // Pass the first file or null
  };

  const handleUploadClick = async () => {
    setLoading(true);
    if (file) {
      console.log("Uploading:", file);
      const response = await uploadKnowledgeBase(file);
      console.log("Response:", response);
      // onUpload(); // Delegate the upload process to the parent component
    } else {
      toast({
        title: "No file selected.",
        description: "Please select a file to upload.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
    setLoading(false);
  };

  return (
    <Center>
      <Box
        p={5}
        shadow="md"
        borderWidth="1px"
        borderRadius="md"
        width="100%"
        maxWidth="md"
      >
        <VStack spacing={4}>
          <input
            ref={inputRef}
            type="file"
            hidden // Hide the default input
            onChange={handleFileChange}
          />
          <IconButton
            aria-label="Upload file"
            icon={<AttachmentIcon />}
            isRound
            size="lg"
            onClick={() => inputRef.current?.click()} // Delegate click to the hidden input
          />
          <Button
            colorScheme="blue"
            onClick={handleUploadClick}
            isDisabled={!file}
            width="full"
          >
            {!isLoading ? "Upload" : "Loading..."}
          </Button>
          {file && <Text fontSize="sm">File selected: {file.name}</Text>}
        </VStack>
      </Box>
    </Center>
  );
};
