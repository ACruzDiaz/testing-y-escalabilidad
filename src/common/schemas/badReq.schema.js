import { generateSchemaProperties } from "../../docs/utils/generatePropertiesSchems.js"
export const badReqSchema = {
  type: "object",
  properties: {    
    errors: {
      type: "array",
      items: generateSchemaProperties("object", "Error details", { field: 'params.email', message: 'El campo email es requerido' })
    }
  }
}