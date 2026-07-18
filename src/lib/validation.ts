import { z } from 'zod';

export const contactSchema = z.object({
  mode: z.enum(['entreprise', 'candidat']),
  name: z.string().trim().min(2, 'Le nom doit contenir au moins 2 caractères').max(120),
  secondField: z.string().trim().max(120).optional().default(''),
  email: z.string().trim().email('Adresse email invalide').max(200),
  phoneOrSpecialty: z.string().trim().max(120).optional().default(''),
  cvLink: z.string().trim().max(500).optional().default(''),
  message: z.string().trim().min(1, 'Le message est requis').max(5000),
});

export type ContactInput = z.infer<typeof contactSchema>;
