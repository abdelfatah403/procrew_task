import { z } from 'zod';

export const signUpSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    phone: z.string().min(11).max(11),
});

export type FormFields = z.infer<typeof signUpSchema>;
