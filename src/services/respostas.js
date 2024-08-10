import api from "./api";

export const getAllRespostas = async () => {
    const response = await api.get('/respostas');
    return response.data;
};
