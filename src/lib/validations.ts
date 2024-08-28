import { z } from 'zod';

const passwordRegEx = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
);

export const UserValidationForm = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8).regex(passwordRegEx, 'Password not valid')
});
