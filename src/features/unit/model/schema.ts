import { z } from "zod";

export const FormUnitSchema = z.object({
  name: z.string().min(1, "Назва обовʼязкова"),
  description: z.string().min(1, "Опис обовʼязковий"),
  price_in_pln: z.number().min(0, "Ціна не може бути меншою за 0"),
});
