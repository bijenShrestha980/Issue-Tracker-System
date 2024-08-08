import { paginateSchema } from "@/types";
import { z } from "zod";

export const issueSchema = z.object({
  id: z.string(),
  name: z.string(),
  status: z.enum(["to_do", "solved"]),
  label_id: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
});

export const issueListSchema = z.object({
  statusCode: z.number(),
  issues: z.array(issueSchema),
  pagination: paginateSchema,
});

export type Issue = z.infer<typeof issueSchema>;

export type IssueList = z.infer<typeof issueListSchema>;
