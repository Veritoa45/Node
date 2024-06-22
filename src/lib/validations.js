import { z } from "zod";

export const userSchema = z.object({
  nombre: z.string().min(3).max(20),
  apellido: z.string().min(3).max(30),
  mail: z.string().min(4).max(70),
  pssword: z.string().min(8).max(16),
  tel: z.string().min(10).max(30),
});
