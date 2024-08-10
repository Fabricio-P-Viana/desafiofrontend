import api from "./api";

export const getAllCanais = async () => {
    const response = await api.get('/canais');
    return response.data;
};