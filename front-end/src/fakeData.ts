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

export const fakeKnowledgebaseCalculus: FileData[] = [
  {
    fileId: "1",
    title: "Fundamentals of Calculus by Emily Carter",
    description:
      "A comprehensive guide to the basics of differential and integral calculus.",
    fileName: "carter_calculus.pdf",
    dateOfUpload: "15-Aug-2023",
  },
  {
    fileId: "2",
    title: "Advanced Calculus by Liam Chen",
    description:
      "An in-depth exploration of advanced calculus topics including multivariable calculus, series, and differential equations.",
    fileName: "chen_advanced_calculus.pdf",
    dateOfUpload: "16-Aug-2023",
  },
  {
    fileId: "3",
    title: "Calculus in Practice by Aarav Smith",
    description:
      "A practical approach to applying calculus in various fields such as engineering, economics, and the physical sciences.",
    fileName: "smith_calculus_practice.pdf",
    dateOfUpload: "17-Aug-2023",
  },
];

export const fakeKnowledgebaseLinearAlgebra: FileData[] = [
  {
    fileId: "4",
    title: "Linear Algebra Essentials by Sofia Murphy",
    description:
      "An essential guide to the core concepts of linear algebra including vector spaces, matrices, and eigenvalues.",
    fileName: "murphy_linear_algebra.pdf",
    dateOfUpload: "18-Aug-2023",
  },
  {
    fileId: "5",
    title: "Applications of Linear Algebra by Noah Kim",
    description:
      "Exploring the applications of linear algebra in various technologies and scientific computations.",
    fileName: "kim_applications_linear_algebra.pdf",
    dateOfUpload: "19-Aug-2023",
  },
  {
    fileId: "6",
    title: "The Geometry of Linear Algebra by Mia Wang",
    description:
      "A geometric perspective on linear algebra concepts, including transformations and the use of matrices to represent them.",
    fileName: "wang_geometry_linear_algebra.pdf",
    dateOfUpload: "20-Aug-2023",
  },
  {
    fileId: "10",
    title: "Linear algebra for College by Johanna Thimis",
    description: "Exercise books for linear algenra",
    fileName: "thimis_linear_algebra.pdf",
    dateOfUpload: "21-Aug-2023",
  },
];

export const fakeKnowledgebaseHardwareFundamentals: FileData[] = [
  {
    fileId: "7",
    title: "Computer Hardware Basics by Ethan Johnson",
    description:
      "An introductory guide to computer hardware components and their functions.",
    fileName: "johnson_hardware_basics.pdf",
    dateOfUpload: "21-Aug-2023",
  },
  {
    fileId: "8",
    title: "Building PCs by Olivia Garcia",
    description:
      "A step-by-step manual for assembling personal computers from components.",
    fileName: "garcia_building_pcs.pdf",
    dateOfUpload: "22-Aug-2023",
  },
  {
    fileId: "9",
    title: "Hardware Troubleshooting Guide by William Martinez",
    description:
      "A practical guide to diagnosing and fixing common hardware issues in computers.",
    fileName: "martinez_hardware_troubleshooting.pdf",
    dateOfUpload: "23-Aug-2023",
  },
];

export const fakeKnowledgebaseEarlyAgRevolution: FileData[] = [
  {
    fileId: "1",
    title: "Seeds of Change: Dawn of Agriculture by Amelia Sowerfield",
    description:
      "Unearthing the origins of early agriculture and its impact on societies",
    fileName: "sowerfield.pdf",
    dateOfUpload: "20-Nov-2023",
  },
  {
    fileId: "2",
    title: "Cultivating Civilization: A Farmer's Legacy by James Plowman",
    description:
      "Exploring the transition from hunter-gatherer to agricultural societies",
    fileName: "plowman.pdf",
    dateOfUpload: "21-Nov-2023",
  },
  {
    fileId: "3",
    title:
      "Harvesting Progress: Tools and Techniques in Early Agriculture by Lily Tillage",
    description:
      "Tracing the evolution of farming practices in ancient civilizations",
    fileName: "tillage.pdf",
    dateOfUpload: "19-Nov-2023",
  },
];

export const fakeKnowledgebaseHistoryAgriculture: FileData[] = [
  {
    fileId: "1",
    title: "History book on WorlWar 2 by Anthony Collins",
    description: "A US view on WW2",
    fileName: "collins.pdf",
    dateOfUpload: "10-Aug-2023",
  },
  {
    fileId: "2",
    title: "WorlWar 2 by Mark Twee",
    description: "The USSR Contribution in the Pacific arena",
    fileName: "twee.pdf",
    dateOfUpload: "11-Aug-2023",
  },
  {
    fileId: "3",
    title: "USA during WW2 by Josh Omak",
    description: "The USA contribution in the Pacific arena",
    fileName: "omak.pdf",
    dateOfUpload: "09-Aug-2023",
  },
];

export const fakeExamsHistory: FileData[] = [
  {
    fileId: "1",
    title: "Exams paper 2020-2023",
    description: "Previous mock exams",
    fileName: "paper_2020_2023.pdf",
    dateOfUpload: "11-Aug-2023",
  },
  {
    fileId: "2",
    title: "Sample Exam Papers",
    description: "Practice for the real deal",
    fileName: "sample_exam_papers.pdf",
    dateOfUpload: "15-Aug-2023",
  },

  {
    fileId: "3",
    title: "Mock Exam Solutions",
    description: "Answers and explanations for mock exams",
    fileName: "mock_exam_solutions.pdf",
    dateOfUpload: "20-Aug-2023",
  },

  {
    fileId: "4",
    title: "Exam Tips and Tricks",
    description: "Strategies to ace your exams",
    fileName: "exam_tips_and_tricks.pdf",
    dateOfUpload: "25-Aug-2023",
  },

  {
    fileId: "5",
    title: "Revision Timetable",
    description: "Plan your study schedule for exams",
    fileName: "revision_timetable.pdf",
    dateOfUpload: "30-Aug-2023",
  },
];
