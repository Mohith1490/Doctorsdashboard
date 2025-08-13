import z from "zod";

export const slotBookingZodSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    location:z.string(),
    category:z.string(),
    age:z.number(),
    phonenumber:z.number(),
    date: z.date(),
    time: z.string().nonempty("Please select a time"),
    email: z.string().email("Invalid email address"),
});

export type slotBookingZodType = z.infer<typeof slotBookingZodSchema>
