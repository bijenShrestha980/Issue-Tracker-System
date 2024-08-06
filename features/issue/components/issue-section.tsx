"use client";

import { useIssues } from "../api/get-issues";
import IssueCard from "./issue-card";

const IssueSection = () => {
  const { data: issues, isLoading, error } = useIssues();

  if (error) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <p>Error: Something went wrong!</p>
      </div>
    );
  }
  if (!issues) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <p>No issues found!</p>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4 mb-4">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {issues?.data.length === 0 ? (
          <p>No issues found!</p>
        ) : (
          issues?.data.map((issue) => (
            <IssueCard
              key={issue.id}
              issue={issue}
              isLoading={isLoading}
              error={error}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default IssueSection;
