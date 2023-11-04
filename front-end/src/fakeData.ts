import { FileData } from "./components/FileTable";
import { ProjectProps } from "./components/Project";

export const previousProject: ProjectProps[] = [
  {
    projectId: "123e4567-e89b-12d3-a456-426614174000",
    createdAt: "02-Nov-2023",
    title: "Calculus",
    description:
      "Comprehensive material covering Calculus I through III, from the fundamentals to advanced integration techniques, for the academic years 2020 to 2023.",
  },
  {
    projectId: "0d29f9b0-e89c-22d3-a457-526655174001",
    createdAt: "26-Aug-2023",
    title: "Linear Algebra",
    description:
      "Course content including matrix theory, vector spaces, and linear transformations, compiled for students enrolled between 2020 to 2023 in MATH2364.",
  },
  {
    projectId: "7f89c5ab-e89d-32d3-a458-626696174002",
    createdAt: "10-Aug-2023",
    title: "Hardware Fundamentals",
    description:
      "A complete overview of computer hardware components, system architecture, and design principles taught in COMP2712 from 2020 to 2023.",
  },
  {
    projectId: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    createdAt: "20-Jul-2023",
    title: "Modern History",
    description:
      "An extensive collection of study materials, lectures, and scholarly articles for the course HIST3327 on Modern History, covering the period from 2020 to 2023.",
  },
];

export const fakeKnowledgebase: FileData[] = [
  {
    fileId: "1",
    title: "History book on WorlWar 2 by Anthony Collins",
    description: "string",
    fileName: "collins.pdf",
    dateOfUpload: "10-Aug-2023",
  },
  {
    fileId: "2",
    title: "WorlWar 2 by Mark Twee",
    description: "string",
    fileName: "twee.pdf",
    dateOfUpload: "11-Aug-2023",
  },
  {
    fileId: "3",
    title: "USA during WW2 by Josh Omak",
    description: "string",
    fileName: "omak.pdf",
    dateOfUpload: "09-Aug-2023",
  },
];
