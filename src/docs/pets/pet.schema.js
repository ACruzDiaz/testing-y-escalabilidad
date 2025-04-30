import { generateSchemaProperties } from "../utils/generatePropertiesSchems.js";
export const petDocSchema = {
  type: "object",
  properties: {
    _id: generateSchemaProperties("string", "", "67ca35d1e8b1391ada8c86ea"),
    name: generateSchemaProperties("string", "Nombre", "Mikecrack"),
    specie: generateSchemaProperties("string", "Especie", "Perro"),
    birthDate: generateSchemaProperties("string", "Fehca de nacimiento", "01/01/2000"),
    adopted: generateSchemaProperties("boolean", "Adoptado", "false"),
    image: generateSchemaProperties("string", "Imagen", "http://local.com/imagen"),
  },
};

