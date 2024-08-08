import { paginateSchema } from "@/types";
import { z } from "zod";

export const issueSchema = z.object({
  id: z.string(),
  name: z.string(),
  status: z.enum(["to_do", "solved"]),
  label: z.string(),
  created_date: z.string(),
  created_time: z.string(),
});

export const issueListSchema = z.object({
  statusCode: z.number(),
  issues: z.array(issueSchema),
  pagination: paginateSchema,
});

export type Issue = z.infer<typeof issueSchema>;

export type IssueList = z.infer<typeof issueListSchema>;
