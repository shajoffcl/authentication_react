import axios from "axios";
import { authHeader, handleResponse } from "../_helpers/index";
import { BASE_URL, URLConstant } from "../config/index";

const getUserDocumentList = (data) => {
  return axios
    .get(BASE_URL + URLConstant.GET_USER_DOCUMENT_LIST, {
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

export const user = {
  getUserDocumentList,
};
