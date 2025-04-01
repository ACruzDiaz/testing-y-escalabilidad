import { generateUsersMocks } from "../../mock/user.mock.js";
import { userDao } from "./mongo/user.dao.js";

class UserService{

  async getAll() {
    return await userDao.getAll()
  }
  async createUsersMocks(amount){
    const users = generateUsersMocks(amount);

    await userDao.removeAll();

    for( const user of users) {
      await userDao.create(user);
    }

    return users;
  }


}

export const userService = new UserService();