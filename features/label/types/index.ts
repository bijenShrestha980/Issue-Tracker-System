import { z } from "zod";

export const labelSchema = z.object({
  id: z.string(),
  name: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
});

export const labelListSchema = z.object({
  data: z.array(labelSchema),
});

export type Label = z.infer<typeof labelSchema>;

export type LabelList = z.infer<typeof labelListSchema>;
