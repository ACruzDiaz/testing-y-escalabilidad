import { generateSchemaProperties } from "../utils/generatePropertiesSchems.js";

export const adoptionDocSchema = {
  type: "object",
  properties: {
    id: generateSchemaProperties("string", "Id de la adopción", "67ca35d1e8b1391ada8c86ea"),
    owner: generateSchemaProperties("string", "Id del dueño", "67ca35d1e8b1391ada8c86ea"),
    pet: generateSchemaProperties("string", "Id de la mascota", "67ca35d1e8b1391ada8c86ea"),
  }
}