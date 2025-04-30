import { petDocSchema } from "./pet.schema.js";

export const petPaths = {
  "/pets": {
    post: {
      summary: "Crear una nueva mascota",
      description: "Create a pet.",
      tags: ["Pets"],
      requestBody: {
        description: "Pet object properties",
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["name", "specie", "birthDate"],
              properties: {
                name: petDocSchema.properties.name,
                specie: petDocSchema.properties.specie,
                birthDate: petDocSchema.properties.birthDate,
                Image: petDocSchema.properties.Image,
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: "Pet created successfully",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Pet",
              },
            },
          },
        },
        400: {
          description: "Error de petición incorrecta",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/BadReqResponse"
              }
            }
          }
        },
        500: {
          description: "Internal Server Error",
          content: {
            "application/json": {},
          },
        },
      },
    },
  },
  "/pets/{id}": {
    get: {
      summary: "Obtenemos una mascota por ID",
      description: "Retrieve a specific pet by its ID.",
      tags: ["Pets"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID of the pet to retrieve",
          schema: petDocSchema.properties._id,
        },
      ],
      responses: {
        200: {
          description: "Devuelve el usuario solicitado",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Pet",
              },
            },
          },
        },
        404: {
          description: "Pet not found",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/NotFound",
              }
            },
          },
        },
        500: {
          description: "Internal Server Error",
          content: {
            "application/json": {
              
            },
          },
        },
      },
    },
    put: {
      summary: "Actualizamos una mascota por ID",
      description: "Update a specific pet by its ID.",
      tags: ["Pets"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID of the pet to update",
          schema: petDocSchema.properties._id,
        },
      ],
      requestBody: {
        description: "Pet object that needs to be updated",
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: [],
              properties: {
                name: petDocSchema.properties.name,
                specie: petDocSchema.properties.specie,
                birthDate: petDocSchema.properties.birthDate,
                Image: petDocSchema.properties.Image,
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Pet updated successfully",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Pet",
              },
            },
          },
        },
        400: {
          description: "Error de petición incorrecta",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/BadReqResponse"
              }
            }
          }
        },
        404: {
          description: "Pet not found",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/NotFound"
              }
            },
          },
        },
        500: {
          description: "Internal Server Error",
          content: {
            "application/json": {},
          },
        },
      },
    },
    delete: {
      summary: "Eliminamos una mascota por ID",
      description: "Delete a specific pet by its ID.",
      tags: ["Pets"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID of the pet to delete",
          schema: petDocSchema.properties._id
        },
      ],
      responses: {
        200: {
          description: "Pet deleted successfully",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Pet",	
              }
            },
          },
        },
        400: {
          description: "Error de petición incorrecta",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/BadReqResponse"
              }
            }
          }
        },
        404: {
          description: "Pet not found",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/NotFound",	
              }
            },
          },
        },
        500: {
          description: "Internal Server Error",
          content: {
            "application/json": {},
          },
        },
      },
    },
  },
  "/pets/mocks/{amount}":{
    get:{
      summary: "Crear pets mocks",
      description: "Create mock pets",
      tags: ["Pets"],
      parameters: [
        {
          name: "amount",
          in: "path",
          required: "true",
          description: "Number of mock pets to create",
          schema:{
            type: "number",
            description:"Number of mock pets to create",
            example: 10
          }
        }
      ],
      responses: {
        201: {
          description: "Pets mocks created successfully",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
              },
            },
          },
        },
        400: {
          description: "Petición incorrecta",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/BadReqResponse"
              }
            }
          }
        },
        500: {
          description: "Internal Server Error",
          content: {
            "application/json": {},
          },
        },
      }

    }
  },
}