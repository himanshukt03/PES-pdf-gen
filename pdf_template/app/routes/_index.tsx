import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Report" }, { name: "description", content: "Report" }];
};

import React from "react";
import AssessmentResult from "~/components/KnowledgeResult";
import Header from "~/components/Header";
import Result from "~/components/Result";
import PageOne from "~/pdf_pages/PageOne";
import PageTwo from "~/pdf_pages/PageTwo";
import PageThree from "~/pdf_pages/PageThree";
import PageFour from "~/pdf_pages/PageFour";
import "../tailwind.css";

const StudentKSAAnalysisReport: React.FC = () => {
  return (
    <div className="font-roboto w-screen">
      <Header />
      <div className="p-36 space-y-12">
        <PageOne />
        <PageTwo />
        <div className="h-56" />
        <PageThree />
        <div className="h-96" />
        <PageFour />
        <Result />
      </div>
    </div>
  );
};

export default StudentKSAAnalysisReport;
