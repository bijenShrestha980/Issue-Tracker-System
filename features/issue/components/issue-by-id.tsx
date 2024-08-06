"use client";

import IssueCard from "./issue-card";
import { useIssue } from "../api/get-issue";
import { QueryParams } from "@/types";

const IssueById = ({
  paginate,
  issue_id,
  status,
  label,
  q,
  userId,
}: QueryParams) => {
  const {
    data: issue,
    isLoading,
    error,
  } = useIssue({
    paginate,
    issue_id,
    status,
    label,
    q,
    userId,
  });

  return <IssueCard issue={issue} isLoading={isLoading} error={error} />;
};

export default IssueById;
