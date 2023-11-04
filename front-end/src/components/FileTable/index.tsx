import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

export interface FileData {
  fileId: string;
  title: string;
  description: string;
  fileName: string;
  dateOfUpload: string; // Assuming date is a string for simplicity, but this could be a Date object as well
}

export interface FileTableProps {
  data: FileData[];
  onDelete: (fileId: string) => void; // Assuming the delete function needs only the file name to delete
}

export const FileTable: React.FC<FileTableProps> = ({ data, onDelete }) => {
  return (
    <Box overflowX="auto">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Description</Th>
            <Th>File Name</Th>
            <Th>Date of Upload</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((file, index) => (
            <Tr key={index}>
              <Td>{file.title}</Td>
              <Td>{file.description}</Td>
              <Td>{file.fileName}</Td>
              <Td>{file.dateOfUpload}</Td>
              <Td>
                <IconButton
                  aria-label="Delete file"
                  icon={<DeleteIcon />}
                  onClick={() => onDelete(file.fileId)}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};
