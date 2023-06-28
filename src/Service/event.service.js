import { ALL_EVENTS_URL } from "../Components/constants";
import axios from "axios";
import { authHeader } from "./base.service";
class EventService {
  getAllEvents() {
    return axios.get(ALL_EVENTS_URL, {
      headers: authHeader(),
    });
  }
}
const eventService = new EventService();
export default eventService;
