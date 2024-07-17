import { createPool } from "mysql2/promise";
// para usar en otros archivos
export const pool = createPool({
  host: "localhost",
  user: "root",
  password: "",
  port: 3306,
  database: "customersdb",
});
