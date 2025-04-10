import { NotFoundError } from "../../common/errors/errors.js";
import { generatePetsMocks } from "../../mock/pets.mock.js";
import { petDao } from "./mongo/pet.dao.js";

class PetService{
  async create(data){
   
    throw new NotFoundError();
  }

  async getAll(){
    return await petDao.getAll()
  }

  async getOne(query) {
    const pet = await petDao.getOne(query);
    if(!pet) throw new NotFoundError("Pet not found");

    return pet;
  }

  async createPetsMocks(amount) {
    const pets = generatePetsMocks(amount);
    await petDao.removeAll();
    for(const pet of pets){
      await petDao.create(pet);
    }

    return pets;
  }

}

export const petService = new PetService();