import { userPaths } from "../docs/user/user.path.js";
import { userDocSchema } from "../docs/user/user.schema.js";
import { petPaths } from "../docs/pets/pets.path.js";
import { petDocSchema } from "../docs/pets/pet.schema.js";
import { adoptionDocSchema } from "../docs/adoptions/adoption.schema.js";
import { adoptionPath } from "../docs/adoptions/adoption.path.js";
import { badReqSchema } from "../common/schemas/badReq.schema.js";
import { ForbiddenSchema, notFoundSchema } from "../common/schemas/notFound.schema.js";
export const swaggerOptions = {
  openapi: '3.0.0',
  info: {
    title: 'PalCare API',
    description: 'Documentación de la API de PalCare',
    version: '1.0.0',
  },
  servers: [
    {
      url: `http://localhost:8080/api`,
      description: 'Servidor de desarrollo',
    },
  ],
  paths: {
    ...userPaths,
    ...petPaths,
    ...adoptionPath,
    
    // Aquí puedes agregar más paths de otros módulos
  },
  components: {
    schemas: {
      User: userDocSchema,
      Pet: petDocSchema,
      Adoption: adoptionDocSchema,
      BadReqResponse : badReqSchema,
      NotFound: notFoundSchema,
      Forbidden: ForbiddenSchema,
      // Aquí puedes agregar más schemas de otros módulos
    }
  }
};