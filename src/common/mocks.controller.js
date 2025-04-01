import { userService } from "../modules/users/user.service.js";
import { petService } from "../modules/pets/pet.service.js";

export const generateData = async (req, res, next) => {

  try {
    if(!req.body.users || !req.body.pets )
      throw new Error("Hacen falta argumentos");
    if(!Number.isInteger(req.body.users) || req.body.users < 0 || !Number.isInteger(req.body.pets) || req.body.pets < 0)
      throw new Error("Los parametros deben ser numeros enteros positivos")
    
    
    const {users, pets} = req.body
      
    await userService.createUsersMocks(users)
    await petService.createPetsMocks(pets)

    res.status(201).json(`Se añadieron ${users} usuarios y ${pets} pets.`);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }

  

}