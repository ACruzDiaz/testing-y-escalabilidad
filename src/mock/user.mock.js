import { fakerES as faker } from "@faker-js/faker";
import { createHash } from "../common/utils/hashPassword.js";
// Función para generar usuario fake

export const generateUsersMocks = (amount) => {
  const users = [];
  const roles = ["admin", "user"];
  let eleccion
  for (let i = 0; i < amount; i++) {
    const user = {
      email: faker.internet.email(),
      password: createHash("coder123"),
      role: roles[Math.floor(Math.random() * roles.length)]
    };

    users.push(user);
  }

  return users;
};
