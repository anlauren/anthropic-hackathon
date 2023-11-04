import Modal from "../../components/Modal";
import Project from "../../components/Project";
import { Box, Button, Grid } from "@chakra-ui/react";
import { previousProject } from "../../fakeData";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  const [isModalProjectOpen, setIsModalProjectOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleEdit = () => {
    // Placeholder function for edit functionality
  };

  const handleDelete = () => {
    // Placeholder function for delete functionality
  };

  const handleAddNewProject = () => {
    setIsModalProjectOpen(true);
  };

  return (
    <Box p={10}>
      <Box display="flex" justifyContent="flex-end" mb={4}>
        <Button onClick={handleAddNewProject} colorScheme="teal">
          Add New Project
        </Button>
      </Box>
      <Modal
        title={title}
        description={description}
        isOpen={isModalProjectOpen}
        onClose={() => setIsModalProjectOpen(false)}
        onSave={() => {
          navigate(`/projects/${uuidv4()}`);
        }}
        onChangeTitle={(inputString) => setTitle(inputString)}
        onChangeDescription={(inputString) => setDescription(inputString)}
      />
      <Grid>
        {previousProject.map((project, index) => (
          <Grid key={index} pt={6}>
            <Project
              projectId={project.projectId}
              title={project.title}
              description={project.description}
              onEdit={handleEdit}
              onDelete={handleDelete}
              createdAt={project.createdAt}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
