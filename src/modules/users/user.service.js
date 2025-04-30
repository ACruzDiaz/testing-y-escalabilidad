import { generateUsersMocks } from "../../mock/user.mock.js";
import { userDao } from "./user.dao.js";

class UserService{
  async createUsersMocks(amount){
    const users = generateUsersMocks(amount);

    await userDao.removeAll();

    for( const user of users) {
      await userDao.create(user);
    }

    return users;
  }

  async update(id, body){
    return await userDao.update(id, body)
  }

  async getAll(){
    return await userDao.getAll();
  }
  async remove(id){
    return await userDao.remove(id);
  }

  async getById(id){
    return await userDao.getById(id)
  }


}

export const userService = new UserService();