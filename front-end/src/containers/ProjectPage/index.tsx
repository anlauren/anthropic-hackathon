import { Center, Grid } from "@chakra-ui/react";
import { useState } from "react";
import { CurrentView, Breadcrumbs } from "../../components/Breadcrumbs";
import { KnowledgeContainer } from "../Knowledge";
import { ExamContainer } from "../Exam";
import { QuestionsContainer } from "../Question";

export const ProjectPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [currentView, setCurrentView] = useState<CurrentView>(
    CurrentView.Knowledge
  );

  const handleFileChange = (file: File | null) => {
    if (file) {
      setFile(file);
    }
  };

  const handleFileUpload = (fileId: string) => {
    alert(fileId);
  };

  const handleClickBredcrumb = (view: CurrentView) => {
    setCurrentView(view);
  };

  const viewToDisplay = (currentView: CurrentView) => {
    if (currentView === CurrentView.Knowledge) {
      return (
        <KnowledgeContainer
          knowledgeFile={file}
          onKnowledgeFileChange={handleFileChange}
          onKnowledgeFileUpload={() => handleFileUpload}
        />
      );
    }
    if (currentView === CurrentView.Exams) {
      return (
        <ExamContainer
          examFile={file}
          onExamFileChange={handleFileChange}
          onExamFileUpload={() => handleFileUpload}
        />
      );
    }
    if (currentView === CurrentView.Questions) {
      return <QuestionsContainer />;
    }
  };

  return (
    <Grid p={6}>
      <Center>
        <Breadcrumbs
          currentView={currentView}
          onClick={(view) => handleClickBredcrumb(view)}
        />
      </Center>

      {viewToDisplay(currentView)}
    </Grid>
  );
};
