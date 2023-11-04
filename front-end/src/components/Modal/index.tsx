import React from "react";
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

export interface ModalProps {
  isOpen: boolean;
  title: string;
  description: string;
  onClose: () => void;
  onSave: (title: string, description: string) => void;
  onChangeTitle: (inputString: string) => void;
  onChangeDescription: (inputString: string) => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  description,
  onClose,
  onSave,
  onChangeTitle,
  onChangeDescription,
}) => {
  const handleSave = () => {
    onSave(title, description);
    onClose(); // Close the modal after save
  };

  return (
    <ChakraModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Project</ModalHeader>
        <ModalCloseButton onClick={onClose} />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              placeholder="Title"
              value={title}
              onChange={(e) => onChangeTitle(e.target.value)}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Description</FormLabel>
            <Input
              placeholder="Description"
              value={description}
              onChange={(e) => onChangeDescription(e.target.value)}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSave}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;
