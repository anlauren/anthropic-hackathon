import Project, { ProjectProps } from "../../components/Project";
import { Box, Button, Grid, GridItem } from "@chakra-ui/react";

export const HomePage = () => {
  const previousProject: ProjectProps[] = [
    {
      title: "Calculus",
      description:
        "Comprehensive material covering Calculus I through III, from the fundamentals to advanced integration techniques, for the academic years 2020 to 2023.",
    },
    {
      title: "Linear Algebra",
      description:
        "Course content including matrix theory, vector spaces, and linear transformations, compiled for students enrolled between 2020 to 2023 in MATH2364.",
    },
    {
      title: "Hardware Fundamentals",
      description:
        "A complete overview of computer hardware components, system architecture, and design principles taught in COMP2712 from 2020 to 2023.",
    },
    {
      title: "Modern History",
      description:
        "An extensive collection of study materials, lectures, and scholarly articles for the course HIST3327 on Modern History, covering the period from 2020 to 2023.",
    },
  ];
  // Function placeholders for edit and delete handlers
  const handleEdit = () => {
    // Placeholder function for edit functionality
  };

  const handleDelete = () => {
    // Placeholder function for delete functionality
  };

  const handleAddNewProject = () => {
    // Placeholder function for adding a new project
  };

  return (
    <Box>
      <Box display="flex" justifyContent="flex-end" mb={4}>
        <Button onClick={handleAddNewProject} colorScheme="teal">
          Add New Project
        </Button>
      </Box>
      <Grid>
        {previousProject.map((project, index) => (
          <Grid key={index} pt={6}>
            <Project
              title={project.title}
              description={project.description}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
