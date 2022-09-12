import { createStore } from "vuex";
import auth from "./auth/index";
export default createStore({
  modules: {
    auth,
  },
});
