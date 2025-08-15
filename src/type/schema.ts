import z from "zod";
import { UserRole } from "./types";

export const slotBookingZodSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    location:z.string(),
    category:z.string(),
    age:z.number(),
    phonenumber:z.number(),
    note:z.string(),
    date: z.date(),
    time: z.string().nonempty("Please select a time"),
    email: z.string().email("Invalid email address"),
});

export type slotBookingZodType = z.infer<typeof slotBookingZodSchema>

export const UserRoleUpdateSchema = z.object({
  email: z.string().email(),
  role: z.nativeEnum(UserRole),
});


export const SettingsSchema = z.object({
  name: z.optional(z.string()),
  role: z.nativeEnum(UserRole),
  email: z.optional(z.string().email()),
  password: z.optional(z.string().min(6, { message: "password must contains 6 charecter" })),
  newPassword: z.optional(z.string().min(6, { message: "New password must contains 6 charecter" })),
})
  .refine((data) => {
    if (data.password && !data.newPassword) {
      return false
    }

    return true
  }, {
    message: "New password is required",
    path: ["newPassword"]
  })
  .refine((data) => {
    if (data.newPassword && !data.password) {
      return false
    }

    return true
  }, {
    message: "Password is required",
    path: ["password"]
  })


  export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, {
    message: "Password must be atleast 6 character long"
  })
});


export const RegisterSchema = z.object({
  username: z.string().min(1, {
    message: "Username required"
  }),
  email: z.string().email(),
  password: z.string().min(6, {
    message: "Password must be atleast 6 character long"
  })
});


export const ResetSchema = z.object({
  email: z.string().email({ message: "Email is required!" }),
});