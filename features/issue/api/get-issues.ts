import { useQuery } from "@tanstack/react-query";

import { axios } from "@/lib/axios";
import { IssueList } from "@/features/issue/types";
import { QueryParams } from "@/types";
import { createQueryParams } from "@/lib/misc";

const getIssues = async (query: QueryParams): Promise<IssueList> =>
  axios
    .get(query ? `/issue/list?${createQueryParams(query)}` : "/issue/list")
    .then((res) => res as unknown as IssueList);

export const useIssues = (query: QueryParams) =>
  useQuery({
    queryKey: ["issue", query],
    queryFn: () => getIssues(query),
  });
