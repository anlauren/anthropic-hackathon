import React from "react";
import { Box, Flex, Text, IconButton } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

export interface ProjectProps {
  title: string;
  description: string;
  onEdit?: () => void; // Replace with the actual type of your event handler
  onDelete?: () => void; // Replace with the actual type of your event handler
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  onEdit,
  onDelete,
}) => {
  return (
    <Box borderRadius="md" boxShadow="md" p="4" bg="white">
      <Flex justify="space-between" align="center">
        {/* Left part - Title and Description */}
        <Box>
          <Text fontSize="xl" fontWeight="bold">
            {title}
          </Text>
          <Text mt={2}>{description}</Text>
        </Box>

        {/* Right part - Edit and Delete Icons */}
        <Box>
          <IconButton
            aria-label="Edit Project"
            icon={<EditIcon />}
            onClick={onEdit}
            size="sm"
            mr={2}
          />
          <IconButton
            aria-label="Delete Project"
            icon={<DeleteIcon />}
            onClick={onDelete}
            size="sm"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Project;
