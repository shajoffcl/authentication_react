import axios from "axios";
import { authHeader, handleResponse } from "../helpers/index";
import { BASE_URL, URLConstant } from "../config/index";

const getData = () => {
  return axios
    .get(BASE_URL + URLConstant.GET_ADMIN_DATA, {
      headers: {
        "x-auth-token": authHeader(),
      },
    })
    .then(handleResponse)
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

export const admin = { getData };
