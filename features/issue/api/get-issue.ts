import { useQuery } from "@tanstack/react-query";

import { axios } from "@/lib/axios";
import { Issue } from "@/features/issue/types";
import { QueryParams } from "@/types";
import { createQueryParams } from "@/lib/misc";

const getIssue = async (query: QueryParams): Promise<Issue> =>
  axios
    .get(`/issue/list?${createQueryParams(query)}`)
    .then((res) => res as unknown as Issue);

export const useIssue = (query: QueryParams) =>
  useQuery({
    queryKey: ["issue", query],
    queryFn: () => getIssue(query),
  });
