import api from "./api";

export const getAllCanais = async () => {
    const response = await api.get('/canais');
    return response.data;
};

export const createCanal = async (nome) => {
    const response = await api.post('/canais', { nome });
    return response.data;
};