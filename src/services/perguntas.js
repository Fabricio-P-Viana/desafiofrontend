import api from "./api";

export const getAllPerguntas = async () => {
    const response = await api.get('/perguntas');
    return response.data;
};
