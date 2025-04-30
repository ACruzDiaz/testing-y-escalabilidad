import { expect } from "chai";
import supertest from "supertest";
import { before, after } from "mocha";
import { preCreateUser } from "./utils/modular.js";
const request = supertest("http://localhost:8080");
let userTest


describe("Test de integración módulo User", () => {
  before (async() => {
    userTest = await preCreateUser({
      first_name: "Juan",
      last_name: "Perez",
      email: "jp@gmail.com",
      password: "123456",
    })
})


  it("[GET] /api/users - Debe obtener todos los usuarios", async () => {
    const { status, body, error } = await request.get(`/api/users`);

    if (error) {
      console.log("Error: ", error);
    }

    expect(status).to.be.equal(200);
    expect(body).to.be.an("array");
  });

  it("[GET] /api/users/:id - Debe obtener un usuario por ID", async () => {
    const { status, body, error } = await request.get(`/api/users/${userTest._id}`);

    if (error) {
      console.log("Error: ", error);
    }

    expect(status).to.be.equal(200);
    expect(body).to.be.an("object");
    expect(body).to.have.property("_id");
    expect(body).to.have.property("first_name");
    expect(body).to.have.property("last_name");
    expect(body).to.have.property("email");
    expect(body).to.have.property("password")
    expect(body).to.have.property("role");
  });


  it("[PUT] /api/users/:id - Debe actualizar un usuario", async () => {
    const data = {
      first_name: "Alan",
      last_name: "Cruz",
      role: "admin"
    };

    const { status, body, error } = await request.put(`/api/users/${userTest._id}`).send(data);
    expect(status).to.be.equal(200);
    expect(body).to.have.property("_id");
    expect(body).to.have.property("first_name");
    expect(body).to.have.property("last_name");
    expect(body).to.have.property("email");
    expect(body).to.have.property("password")
    expect(body).to.have.property("role");
    expect(body.first_name).to.be.equal("Alan");
    expect(body.last_name).to.be.equal("Cruz");
    expect(body.role).to.be.equal("admin");
  });

  it("[DELETE] /api/users/:id - Debe eliminar un usuario", async () => {

    const { status, body, error } = await request.delete(`/api/users/${userTest._id}`);
    expect(status).to.be.equal(200);
    expect(body).to.have.property("_id");
    expect(body).to.have.property("first_name");
    expect(body).to.have.property("last_name");
    expect(body).to.have.property("email");
    expect(body).to.have.property("password")
    expect(body).to.have.property("role");
    expect(body.first_name).to.be.equal("Alan");
    expect(body.last_name).to.be.equal("Cruz");
    expect(body.role).to.be.equal("admin");
  });

});
