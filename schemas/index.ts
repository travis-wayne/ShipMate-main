import * as z from "zod";

export const SettingsSchema = z.object({
  name: z.optional(z.string()),
  isTwoFactorEnabled: z.optional(z.boolean()),

  email: z.optional(z.string().email()),
  password: z.optional(z.string().min(8)),
  newPassword: z.optional(z.string().min(8)),
})
  .refine((data) => {
    if (data.password && !data.newPassword) {
      return false;
    }

    return true;
  }, {
    message: "New password is required!",
    path: ["newPassword"]
  })
  .refine((data) => {
    if (data.newPassword && !data.password) {
      return false;
    }

    return true;
  }, {
    message: "Password is required!",
    path: ["password"]
  })

export const NewPasswordSchema = z.object({
  password: z.string().min(8, {
    message: "Minimum of 8 characters required",
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Invalid email address",
  }),
  password: z.string().min(8, 'Password must be at least 8 characters long').refine((data) => data !== undefined, {
    message: "Password is required",
  }),
  cpassword: z.string().min(8, 'Password must be at least 8 characters long').refine((data) => data !== undefined, {
    message: "Password is required",
  }),
  fname: z.string().min(1, {
    message: "First name is required",
  }),
  lname: z.string().min(1, {
    message: "Last name is required",
  }),
}).refine((data) => data.password === data.cpassword, {
  path: ['cpassword'],
  message: 'Passwords do not match',
});
