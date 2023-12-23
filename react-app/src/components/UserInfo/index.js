import axios from "axios";

const url = "http://43.202.62.70:8080/users";
export const getUser = async (userId) => {
  const response = await axios({
    method: "get",
    responseType: "json",
  });
  if (response.status === 200) {
    return response.data["user"];
  } else if (response.status === 401) {
    return new Error("401 Unauthorized");
  } else {
    return new Error("Unknown Error");
  }
};

export const setUser = async (userId) => {
  const response = await axios({
    method: "patch",
    url: `${url}/${userId}`,
    responseType: "json",
    headers: {
      AccessToken: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  if (response.status === 200) {
    return response.data["user"];
  } else if (response.status === 401) {
    return new Error("401 Unauthorized");
  } else {
    return new Error("Unknown Error");
  }
};
