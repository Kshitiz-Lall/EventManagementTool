import axios from "axios";
import { USER_PROFILE_URL } from "../Components/constants";
import { authHeader } from "./base.service";

class UserService {
  getprofile(userid) {
    return axios.get(USER_PROFILE_URL + userid, { headers: authHeader() });
  }
}
const userService = new UserService();

export default userService;
