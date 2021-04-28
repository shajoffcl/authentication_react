import axios from "axios";
import { BehaviorSubject } from "rxjs";
import { handleResponse } from '../helpers/index';
import { URLConstant } from "../config/index";

const BASE_URL = "http://10.8.0.149:5000";

const currentUserSubject = new BehaviorSubject(
  JSON.parse(localStorage.getItem("currentUser"))
);

const Login = (user_name, password) => {
  return axios
    .post(BASE_URL + URLConstant.GET_USER_DATA, { user_name, password })
    .then(handleResponse)
    .then((user) => {
      console.log(user);
      window.localStorage.setItem("currentUser", JSON.stringify(user));
      currentUserSubject.next(user);
      return user;
    })
    .catch((err) => {
      console.log('auth', err);
      throw err;
    });
};

const Logout = () => {
  window.localStorage.removeItem("currentUser");
  currentUserSubject.next(null);
};

export const authenticationService = {
  Login,
  Logout,
  currentUser: currentUserSubject.asObservable(),
  get currentUserValue() {
    return currentUserSubject.value;
  },
};
