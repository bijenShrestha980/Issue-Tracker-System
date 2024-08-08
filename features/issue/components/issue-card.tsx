"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CardSkeleton from "@/components/card-skeleton";
import { Issue } from "../types";

const IssueCard = ({
  issue,
  isLoading,
  error,
}: {
  issue: Issue | undefined;
  isLoading: boolean;
  error: Error | null;
}) => {
  if (error) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <p>Error: Something went wrong!</p>
      </div>
    );
  }
  if (isLoading) {
    return <CardSkeleton />;
  }
  if (!issue) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <p>No issues found!</p>
      </div>
    );
  }
  return (
    <Card className="shadow-md w-full">
      <CardHeader>
        <CardTitle className="flex justify-between">
          <p className="line-clamp-2 w-2/3">{issue.name}</p>
          <div className="w-1/3 flex justify-end">
            <Badge
              variant={issue.status === "solved" ? "outline" : "default"}
              className="h-fit w-fit flex items-center"
            >
              {issue.status === "solved" ? "Solved" : "To Do"}
            </Badge>
          </div>
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

export default IssueCard;
