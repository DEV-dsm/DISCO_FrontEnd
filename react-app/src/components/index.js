import axios from "axios";

const url = "http://192.168.2.201:3000/post";

export const diary = async () => {
  const response = await axios({
    method: "get",
    responseType: "json",
    url: `${url}/diary`,
    headers: {
      AccessToken: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  if (response.status === 201) {
    return response.data;
  } else if (response.status === 400) {
    return new Error("400 Bad request");
  } else if (response.status === 401) {
    return new Error("401 Unauthorized");
  } else {
    return new Error("Unknown Error");
  }
};

export const issue = async () => {
  const response = await axios({
    method: "get",
    responseType: "json",
    url: `${url}/diary`,
  });
  if (response.status === 201) {
    return response.data;
  } else if (response.status === 401) {
    return new Error("401 Unauthorized");
  } else {
    return new Error("Unknown Error");
  }
};

export const like = async (postId) => {
  const response = await axios({
    method: "post",
    responseType: "json",
    url: `${url}/${postId}/like`,
    headers: {
      AccessToken: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  if (response.status === 201) {
    return response.data;
  } else if (response.status === 400) {
    return new Error("400 Bad request");
  } else if (response.status === 401) {
    return new Error("401 Unauthorized");
  } else if (response.status === 404) {
    return new Error("404 Not found");
  } else if (response.status === 409) {
    return new Error("409 Conflict");
  } else {
    return new Error("Unknown Error");
  }
};

export const unlike = async (postId) => {
  const response = await axios({
    method: "delete",
    responseType: "json",
    url: `${url}/${postId}/like`,
    headers: {
      AccessToken: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  if (response.status === 201) {
    return response.data;
  } else if (response.status === 400) {
    return new Error("400 Bad request");
  } else if (response.status === 401) {
    return new Error("401 Unauthorized");
  } else if (response.status === 403) {
    return new Error("403 Forbidden");
  } else if (response.status === 404) {
    return new Error("404 Not found");
  } else if (response.status === 409) {
    return new Error("409 Conflict");
  } else {
    return new Error("Unknown Error");
  }
};
