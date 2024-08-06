import { useQuery } from "@tanstack/react-query";
import { axios } from "@/lib/axios";
import { IssueList } from "@/features/issue/types";

const getIssues = async () =>
  axios.get("/api/issue/list").then((res) => res as unknown as IssueList);

export const useIssues = () =>
  useQuery({
    queryKey: ["issues"],
    queryFn: () => getIssues(),
  });
