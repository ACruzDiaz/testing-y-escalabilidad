import {isValidPassword} from "../../../src/common/utils/hashPassword.js";
import { expect } from "chai";
import supertest from "supertest";
const request = supertest("http://localhost:8080");

export const preCreateUser = async (user) => {
  const newUser = user;

  const { status, body, error } = await request.post("/api/auth/register").send(newUser);
  const checkPassword = isValidPassword(body, newUser.password);


  expect(status).to.be.equal(201);
  expect(body.first_name).to.be.equal("Juan");
  expect(body.last_name).to.be.equal("Perez");
  expect(body.email).to.be.equal("jp@gmail.com");
  expect(body.password).to.not.be.equal("123456"); // ????
  expect(checkPassword).to.be.equal(true); // validamos que la contraseña esta bien hasheada
  expect(body).to.be.an("object");

  return body
}

export const preCreatePet = async (pet) => {
      const newPet = pet;
  
      const { status, body, error } = await request.post("/api/pets").send(newPet);
  
      if(error){
        console.log("Error: ", error);
      }
      
  
      expect(status).to.be.equal(201);
      expect(body).to.have.property("_id");
      expect(body).to.have.property("name");
      expect(body).to.have.property("specie");
      expect(body).to.have.property("image");
      expect(body.name).to.be.equal("Felix");
      expect(body.specie).to.be.equal("Gato");
      expect(body.birthDate).to.be.equal("2020-10-12T07:00:00.000Z");

      return body
    
}

export const postDeleteUser = async (user) => {
  try {
    await request.delete(`/api/users/${user._id}`);
  } catch (error) {
    console.log(error);
  }

}

export const postDeletePet = async (pet) => {
  try {
    await request.delete(`/api/pets/${pet._id}`);
  } catch (error) {
    console.log(error);
  }
}

export const postDeleteAdoption = async (adoption) => {
  try {
    await request.delete(`/api/adoptions/${adoption._id}`);
  } catch (error) {
    console.log(error);
  }
}