import axios from "axios";

const URL = "http://localhost:12345";

const model = axios.create({
  baseURL: URL,
});

export const predictSVC = async (body) => {
  const response = await model.post("/predict/svc", body);
  return response;
};

export const predictRF = async (body) => {
  const response = await model.post("/predict/rf", body);
  return response.data;
};

export const predictKNN = async (body) => {
  const response = await model.post("/predict/knn", body);
  return response.data;
};

export const predictAda = async (body) => {
  const response = await model.post("/predict/ada", body);
  return response.data;
};

export const predictVotingHard = async (body) => {
  const response = await model.post("/predict/vote_hard", body);
  return response.data;
};

export const predictVotingSoft = async (body) => {
  const response = await model.post("/predict/vote_soft", body);
  return response.data;
};
