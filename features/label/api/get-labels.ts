import { useQuery } from "@tanstack/react-query";

import { axios } from "@/lib/axios";
import { LabelList } from "../types";

const getLabels = async (): Promise<LabelList> =>
  axios.get(`/api/labels/list`).then((res) => res as unknown as LabelList);

export const useLabels = () =>
  useQuery({
    queryKey: ["labels"],
    queryFn: () => getLabels(),
  });
