import { z } from "zod";

export const labelSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export const labelListSchema = z.object({
  statusCode: z.number(),
  message: z.string(),
  labels: z.array(labelSchema),
});

export type Label = z.infer<typeof labelSchema>;

export type LabelList = z.infer<typeof labelListSchema>;
