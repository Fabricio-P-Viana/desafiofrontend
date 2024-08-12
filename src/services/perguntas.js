import api from "./api";

export const getAllPerguntas = async () => {
    const response = await api.get('/perguntas');
    return response.data;
};

export const createNewPergunta = async (texto,canalId) => {
    const response = await api.post('/perguntas', { texto,canalId });
    return response.data;
};

export const deletePergunta = async (perguntaId) => {
    const response = await api.delete(`/perguntas/${perguntaId}`);
    return response.data;
};