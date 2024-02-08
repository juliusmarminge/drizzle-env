import { env } from "./env";
import type { Config } from "drizzle-kit";

console.log("\n\nprocess.env", env.DATABASE_URL, "\n\n")

export default {
    driver: "mysql2",
    schema: "./schema.ts",
    dbCredentials: {
        uri: env.DATABASE_URL
    }
} satisfies Config