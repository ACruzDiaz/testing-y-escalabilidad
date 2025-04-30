import { request, response } from "express";
import { userService } from "./user.service.js";
import { NotFoundError } from "../../common/errors/errors.js";

class UserController {
  async getAll(req = request, res = response, next) {
    try {
      const users = await userService.getAll();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }
  async getOne (req,res,next){
    try {
      const { id } = req.params
      const user = await userService.getById(id)
      if (!user) throw new NotFoundError('El usuario no existe')
      res.status(200).json(user)
    } catch (error) {
      next(error)
    }
  }

  async createUsersMocks(req = request, res = response) {
    try {
      const { amount } = req.params;
      const users = await userService.createUsersMocks(amount);

      res.status(201).json(users);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async update (req, res ,next){
    try {
      const { id } = req.params
      const body = req.body
      const exist = await userService.getById(id)
      if(!exist) throw new NotFoundError('El usuario no existe')
      const userUpdated = await userService.update(id, body)
      res.status(200).json(userUpdated)
    } catch (error) {
      next(error)
    }
  }

  async remove (req, res, next){
    try {
      const { id } = req.params;
      const exist = await userService.getById(id)
      if (!exist) throw new NotFoundError('El usuario no existe')
      const userDeleted =  await userService.remove(id);
      res.status(200).json(userDeleted);
    } catch (error) {
      next(error)
    }
  }
}

export const userController = new UserController();
