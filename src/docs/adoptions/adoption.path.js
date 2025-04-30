import { adoptionDocSchema } from "./adoption.schema.js";

export const adoptionPath = {
  "/adoptions": {
    get: {
      summary: "Obtener todas las adopciones",
      description: "Get all adoptions",
      tags: ["Adoptions"],
      responses: {
        200: {
          description: "Devuelve la adopción",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Adoption"
              }
            }
          }
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
          description: "Adopción no encontrada",
          content: {
            "application/json": {
              schema:{
                $ref: "#/components/schemas/NotFound"
              }
            },
          },
        }
      }

    },
    post: {
      summary: "Crear una adopción",
      description: "Crea una nueva adopción",
      tags: ["Adoptions"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["owner", "pet"],
              properties: {
                owner: adoptionDocSchema.properties.owner,
                pet: adoptionDocSchema.properties.pet
              }
            }
          }
        }
      },
      responses: {
        201: {
          description: "Adopción creada",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Adoption"
              }
            }
          }
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
          description: "Mascota no encontrada",
          content: {
            "application/json": {
              schema:{
                $ref: "#/components/schemas/NotFound"
              }
            }
          }
        }
      }

    }

  },

  "/adoptions/{id}": {
    get: {
      summary: "Obtener una adopción por ID",
      description: "Get adoption by id",
      tags: ["Adoptions"],
      parameters: [
        {
          in: 'path',
          name: 'id',
          required: true,
          schema: adoptionDocSchema.properties.id,
          description: 'El ID de la adopcion a obtener'
        }
      ],
      responses: {
        200: {
          description: "Devuelve la adopción",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Adoption"
              }
            }
          }
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
          description: "Adopción no encontrada",
          content: {
            "application/json": {
              schema:{
                $ref: "#/components/schemas/NotFound"
              }
            },
          },
        }
      }

    },
    delete: {
      summary: "Eliminar una adopción por ID",
      description: "Delete adoption by id",
      tags: ["Adoptions"],
      parameters: [
        {
          in: 'path',
          name: 'id',
          required: true,
          schema: adoptionDocSchema.properties.id,
          description: 'El ID de la adopcion a eliminar'
        }
      ],
      responses: {
        200: {
          description: "Devuelve la adopción",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Adoption"
              }
            }
          }
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
          description: "Adopción no encontrada",
          content: {
            "application/json": {
              schema:{
                $ref: "#/components/schemas/NotFound"
              }
            },
          },
        }
      }
    }

  },
}