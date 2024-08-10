import api from "./api";

export const getAllPerguntas = async () => {
    const response = await api.get('/perguntas');
    return response.data;
};

export const getAllPerguntasbyCanalId = async (canalId) => {
    const response = await api.get(`/perguntas/${canalId}`);
    // console.log(response.data);
    
    return response.data;
};
