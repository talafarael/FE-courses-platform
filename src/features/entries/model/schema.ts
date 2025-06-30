import { z } from "zod";

export const FormEntriesSchema = z.object({
  name: z.string().min(6),
  typeEntries: z.enum(["lecture", "test"]),
});
