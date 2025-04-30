import { userDocSchema } from "./user.schema.js";

export const userPaths = {
  "/users": {
    get: {
      summary: "Obtener todos los usuarios",
      description: "Get all users",
      tags: ["Users"],
      responses: {
        200: {
          description: "Todos los usuarios",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User"
              }
            }
          }
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
  "/users/{id}": {
    get: {

      summary: "Obtener un usuario por ID",
      description: "Get a user by ID",
      tags: ["Users"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID of the user",
          schema: userDocSchema.properties._id
        }
      ],
      responses: {
        200: {
          description: "User founded successfully",
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
        404: {
          description: "User not found",
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
    put: {
      summary: "Actualizamos un usuario por ID",
      description: "Update a specific user by its ID.",
      tags: ["Users"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID of the user to update",
          schema: userDocSchema.properties._id,
        },
      ],
      requestBody: {
        description: "Information to update",
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: [],
              properties: {
                first_name: userDocSchema.properties.first_name,
                last_name: userDocSchema.properties.last_name,
                role: userDocSchema.properties.role,
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "User updated successfully",
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
        404: {
          description: "User not found",
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
      summary: "Borrar un usuario por ID",
      description: "Delete a user by ID",
      tags: ["Users"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID of the user",
          schema: userDocSchema.properties._id
        }
      ],
      responses: {
        200: {
          description: "User deleted successfully",
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
        404: {
          description: "User not found",
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

    }
  },
  "/users/mocks/{amount}":{
    get:{
      summary: "Crear usuarios mocks",
      description: "Create mock users",
      tags: ["Users"],
      parameters: [
        {
          name: "amount",
          in: "path",
          required: "true",
          description: "Number of mock users to create",
          schema:{
            type: "number",
            description:"Number of mock users to create",
            example: 10
          }
        }
      ],
      responses: {
        201: {
          description: "User mocks created successfully",
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
  "/auth/register": {
    post: {
      summary: "Registrar un nuevo usuario",
      description: "Register a new user.",
      tags: ["Users"],
      requestBody: {
        description: "Information for the new user",
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["first_name", "last_name", "email", "password"],
              properties: {
                first_name: userDocSchema.properties.first_name,
                last_name: userDocSchema.properties.last_name,
                email: userDocSchema.properties.email,
                password: userDocSchema.properties.password,
                role: userDocSchema.properties.role,
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: "User created successfully",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
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
        403: {
          description: "Forbbiden error",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Forbidden"
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
    }
  }
}