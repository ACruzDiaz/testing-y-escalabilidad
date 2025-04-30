import { generateSchemaProperties } from "../../docs/utils/generatePropertiesSchems.js";
export const notFoundSchema = {
  type: "object",
  properties: {
    statusCode: generateSchemaProperties("number", "Código de estado", 404),
    message: generateSchemaProperties("string", "Mensaje de error", "No se encontró el recurso solicitado"),
  },
}

export const ForbiddenSchema = {
  type: "object",
  properties: {
    statusCode: generateSchemaProperties("number", "Código de estado", 403),
    message: generateSchemaProperties("string", "Mensaje de error", "El elemento que buscas esta prohibido"),
  },
};