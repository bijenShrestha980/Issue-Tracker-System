"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
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
    return (
      <Card className="shadow-md h-18 w-full">
        <CardHeader>
          <CardTitle className="flex justify-between">
            <Skeleton className="h-6 w-[100px]" />
            <Skeleton className="h-6 w-[58px] rounded-full" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Skeleton className="h-6 w-[70px]" />
        </CardContent>
        <CardFooter>
          <Skeleton className="h-6 w-[400px]" />
        </CardFooter>
      </Card>
    );
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
          <p>{issue.name}</p>
          <Badge variant="outline">{issue.status}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>Lable: {issue.label_id}</p>
      </CardContent>
      <CardFooter>
        <p>Created at: {issue.created_at}</p>
        &nbsp;
        <p>/</p>
        &nbsp;
        <p>Updated at: {issue.updated_at}</p>
      </CardFooter>
    </Card>
  );
};

export default IssueCard;
