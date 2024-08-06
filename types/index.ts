import { z } from "zod";

export const paginateSchema = z.object({
  pageNumber: z.number(),
  pageSize: z.number(),
  sort: z.string(),
  descending: z.boolean(),
  numberOfPages: z.number(),
  rowsCount: z.number(),
});

export const queryParamsSchema = z.object({
  paginate: z.string().optional(),
  issue_id: z.string().optional(),
  status: z.enum(["to_do", "solved"]).optional(),
  label: z.string().optional(),
  q: z.string().optional(),
  userId: z.string().optional(),
});

export type PageOptions = z.infer<typeof paginateSchema>;

export type QueryParams = z.infer<typeof queryParamsSchema>;
