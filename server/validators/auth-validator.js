const { z } = require("zod");

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required!" })
    .trim()
    .min(3, { message: "Name must be at least 3 characters!" })
    .max(255, { message: "Name must not be more than 255 characters!" }),
  email: z
    .string({ required_error: "Email is required!" })
    .trim()
    .email({ message: "Invalid email address!" })
    .min(3, { message: "Email must be at least 3 characters!" })
    .max(255, { message: "Email must not be more than 255 characters!" }),
  phone: z
    .string({ required_error: "Phone is required!" })
    .trim()
    .min(11, { message: "Phone must be at least 11 characters!" })
    .max(20, { message: "Phone must not be more than 20 characters!" }),
  password: z
    .string({ required_error: "Password is required!" })
    .min(7, { message: "Password must be at least 7 characters!" })
    .max(1024, { message: "Password must not be more than 1024 characters!" }),
});

module.exports = signupSchema;
