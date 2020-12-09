import { createConnection } from "typeorm";

createConnection()
.then(() => console.log("Conectou ao banco de dados"));