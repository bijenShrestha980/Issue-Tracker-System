"use client";

import CardSkeleton from "@/components/card-skeleton";
import IssueCard from "./issue-card";
import { useIssues } from "../api/get-issues";
import { QueryParams } from "@/types";

const IssueSection = ({
  paginate,
  issue_id,
  status,
  label,
  q,
}: QueryParams) => {
  const {
    data: issues,
    isLoading,
    error,
  } = useIssues({
    ...(paginate && { paginate }),
    ...(issue_id && { issue_id }),
    ...(status && { status }),
    ...(label && { label }),
    ...(q && { q }),
  });

  if (isLoading) {
    return (
      <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {[...Array(15)].map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    );
  }
  if (error) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <p>Error: Something went wrong!</p>
      </div>
    );
  }
  if (!issues || issues?.issues.length === 0) {
    return (
      <div className="w-full h-full flex justify-center items-center py-4">
        <p>No issues found!</p>
      </div>
    );
  }
  return (
    <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {issues?.issues.map((issue) => (
        <IssueCard
          key={issue.id}
          issue={issue}
          isLoading={isLoading}
          error={error}
        />
      ))}
    </div>
  );
};

export default IssueSection;
