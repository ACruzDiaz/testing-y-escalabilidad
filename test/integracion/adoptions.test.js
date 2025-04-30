import { expect } from "chai";
import supertest from "supertest";
import { before, after } from "mocha";
import { preCreateUser, preCreatePet, postDeleteUser, postDeletePet, postDeleteAdoption } from "./utils/modular.js";

const request = supertest("http://localhost:8080");
let userTest
let petTest
let adoptionTest
describe("Test de integración módulo Adoption", () => {
  before(async () => {
    userTest = await preCreateUser({
      first_name: "Juan",
      last_name: "Perez",
      email: "jp@gmail.com",
      password: "123456",
    })
    petTest = await preCreatePet(
      {
        name: "Felix",
        specie: "Gato",
        birthDate: "10-12-2020",
        image: "dfdafkdasfakldf",
      })
  })

  it("[GET] /api/adoptions - Debe obtener todas las adopciones", async () => {
    const { status, body, error } = await request.get(`/api/adoptions`);


    expect(status).to.be.equal(200);
    expect(body).to.be.an("array");
  })

  it("[POST] /api/adoptions - Debe de crear una adopción", async () => {
    const data = {
      owner: userTest._id,
      pet: petTest._id,
    }
    const { status, body, error } = await request.post(`/api/adoptions`).send(data);

    adoptionTest = body
    expect(status).to.be.equal(201);
    expect(body).to.have.property("_id");
    expect(body).to.have.property("owner");
    expect(body).to.have.property("pet");

    
  })
  it("[GET] /api/adoptions/:id - Debe obtener una adopción dado un ID", async () => {
    const { status, body, error } = await request.get(`/api/adoptions/${adoptionTest._id}`);
    expect(status).to.be.equal(200);
    expect(body).to.be.an("object");
    expect(body).to.have.property("_id");
    expect(body).to.have.property("owner");
    expect(body).to.have.property("pet");
    expect(body.owner._id).to.be.equal(userTest._id.toString());
    expect(body.pet._id).to.be.equal(petTest._id.toString());
  })

  after(async () => {
    await postDeleteUser(userTest)
    await postDeletePet(petTest)
    await postDeleteAdoption(adoptionTest)
  })
})