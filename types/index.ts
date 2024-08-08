import { z } from "zod";

export const paginateSchema = z.object({
  pageNumber: z.number(),
  pageSize: z.number(),
  sort: z.string(),
  descending: z.boolean(),
  numberOfPages: z.number(),
  rowsCount: z.number(),
  current_page: z.number(),
  first_page_url: z.string(),
  prev_page_url: z.string(),
  next_page_url: z.string(),
  last_page_url: z.string(),
  last_page: z.number(),
  per_page: z.number(),
  total: z.number(),
  total_page: z.number(),
  path: z.string(),
});

export const queryParamsSchema = z.object({
  paginate: z.string().optional(),
  issue_id: z.string().optional(),
  status: z.enum(["to_do", "solved"]).optional(),
  label: z.string().optional(),
  q: z.string().optional(),
});

export type PageOptions = z.infer<typeof paginateSchema>;

export type QueryParams = z.infer<typeof queryParamsSchema>;
