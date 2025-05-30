import { generateSchemaProperties } from "../utils/generatePropertiesSchems.js";

export const userDocSchema = {
  type: "object",
  properties: {
    _id: generateSchemaProperties("string", "", "67ca35d1e8b1391ada8c86ea"),
    first_name: generateSchemaProperties("string", "Nombre", "Raul"),
    last_name: generateSchemaProperties("string", "Apellido", "Querol"),
    email: generateSchemaProperties("string", "Email", "rq@example.com"),
    password: generateSchemaProperties("string", "password", "123"),
    role: generateSchemaProperties("string", "", "user"),
    pets: generateSchemaProperties("array", "", "[]")
  },
};
