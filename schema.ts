import { int, mysqlTable } from "drizzle-orm/mysql-core";

export const table = mysqlTable("my_table", {
    id: int("id").autoincrement().primaryKey()
})