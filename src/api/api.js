import axios from "axios";
axios.defaults.baseURL = "https://647cbf19c0bae2880ad12174.mockapi.io/tweets";

export const fetchTweets = async (page = 1, limit = 3) => {
  const request = await axios
    .get(`/tweets?page=${page}&limit=${limit}`)
    .catch((e) => console.log(e.request.response));

  return request;
};
export const changeFollowers = async (id, followers) => {
  const request = await axios
    .put(`/tweets/${id}`, { followers })
    .catch((e) => console.log(e.request.response));
  return request;
};
