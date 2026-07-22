import z from "zod";

const envSchema = z.object({
  MELI_APP_ID: z.string().nonempty("MELI_APP_ID is required"),
  MELI_CLIENT_SECRET: z.string().nonempty("MELI_CLIENT_SECRET is required"),
  APP_URL: z.string().url("APP_URL must be a valid URL").nonempty("APP_URL is required"),
});

const envValidation = envSchema.safeParse(process.env);

if (!envValidation.success) {
  console.error("Invalid environment variables:", envValidation.error.format());
  process.exit(1);
}

export const env = envValidation.data;