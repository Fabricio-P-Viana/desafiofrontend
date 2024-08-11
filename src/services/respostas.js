import api from "./api";

export const getAllRespostas = async () => {
  const response = await api.get('/respostas');
  return response.data;
};

export const createNewResposta = async (texto, nota, questionId) => {
  const response = await api.post('/respostas', { texto, nota, perguntaId:questionId });
  return response.data;
};