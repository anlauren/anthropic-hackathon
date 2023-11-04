import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export enum CurrentView {
  Knowledge,
  Exams,
  Questions,
}

export interface BreadcrumbsProps {
  currentView: CurrentView;
  onClick: (view: CurrentView) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  currentView,
  onClick,
}) => {
  const breadcrumbItems = [
    {
      label: "Your Knowledge",
      view: CurrentView.Knowledge,
    },
    { label: "Your Exams", view: CurrentView.Exams },
    {
      label: "Generate!",
      view: CurrentView.Questions,
    },
  ];

  return (
    <Breadcrumb separator={<ChevronRightIcon color="gray.500" />} pb={10}>
      {breadcrumbItems.map((item, index) => (
        <BreadcrumbItem key={index}>
          <BreadcrumbLink
            as={Link}
            fontWeight={currentView === item.view ? "bold" : "normal"}
            fontSize="2xl"
            color="teal.600"
            onClick={() => onClick(item.view)}
          >
            {item.label}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};
