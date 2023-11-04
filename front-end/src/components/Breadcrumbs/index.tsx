import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;

  // Assuming your paths are like /knowledge, /exams, /questions
  //   const pathSnippets = pathname.split("/").filter((i) => i);

  // Match the paths for your breadcrumbs
  const breadcrumbItems = [
    { path: "/knowledge", label: "Your Knowledge" },
    { path: "/exams", label: "Your Exams" },
    { path: "/questions", label: "Your Questions" },
  ];

  //   function doesUrlContainWord(url: string, word: string): boolean {
  //     // Check if the 'word' is part of the URL path
  //     return url.includes(word);
  //   }

  //   // Usage example:
  //   const url = "/your-knowledge/exams";
  //   const word = "exams";

  return (
    <Breadcrumb>
      {breadcrumbItems.map((item, index) => (
        <BreadcrumbItem key={index} isCurrentPage={pathname === item.path}>
          <BreadcrumbLink
            as={Link}
            fontWeight={pathname === item.path ? "bold" : "normal"}
            fontSize="2xl"
            color="teal.600"
          >
            {item.label}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};
