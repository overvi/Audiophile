import { z } from "zod";

export const schema = z.object({
  name: z
    .string({
      required_error: "The Field Cannot Be Empty",
    })
    .min(1, { message: "The Field Cannot Be Empty" }),
  email: z.string({ required_error: "The Field Cannot Be Empty" }).email(),
  phone: z
    .number({
      invalid_type_error: "Invalid Number",
    })
    .min(5, "Invalid Number"),
  address: z
    .string({ required_error: "The Field Cannot Be Empty" })
    .min(1, { message: "The Field Cannot Be Empty" }),
  zip: z.number({ invalid_type_error: "The zip must be a Number" }),
  city: z.string().min(1, "Invalid City Name"),
  country: z.string().min(1, "Invalid Country Name"),
  eNumber: z.number({ invalid_type_error: "Invalid Number" }).optional(),
  ePin: z.number({ invalid_type_error: "Invalid Pin" }).optional(),
});

export type schemaType = z.infer<typeof schema>;
