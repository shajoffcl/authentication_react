import axios from "axios";
import { authHeader, handleResponse } from "../_helpers/index";
import { BASE_URL, API } from "../config/index";

const getUserBankDetail = (data) => {
  return axios
    .get(BASE_URL + API.GET_USER_BANK_DETAIL, {
      headers: {
        "x-auth-token": authHeader(),
      },
      params: {
        ...data,
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

export const admin_compliance = {
  getUserBankDetail,
};
