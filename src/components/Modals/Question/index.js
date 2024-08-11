import { useState } from "react";
import { SubmitQuestionButton } from "./styles";
import { CloseButton, Input, ModalContainer, Overlay } from "@/styles/globals";

import toastr from "toastr";

const ModalQuestion = ({ isOpen, onClose, onSubmit }) => {
    const [texto, setTexto] = useState('');
    const handleSubmit = () => {
        if(texto.length <= 0) return toastr.info("Campo de Questão esta vazio!");
        if (texto) {
            onSubmit(texto);
            setTexto('');
        }
    };

    if (!isOpen) return null;

    return (
        <Overlay>
            <ModalContainer>
                <CloseButton onClick={onClose}>X</CloseButton>
                <h2>Criar Pergunta</h2>
                <Input
                    type="text" 
                    value={texto} 
                    onChange={(e) => setTexto(e.target.value)} 
                    placeholder="Digite a pergunta" 
                />
                <SubmitQuestionButton onClick={handleSubmit}>Criar</SubmitQuestionButton>
            </ModalContainer>
        </Overlay>
    );
};

export default ModalQuestion;