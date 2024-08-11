import { useState } from "react";
import { CloseButton, Input, ModalContainer, Overlay } from "@/styles/globals";
import { SubmitButton } from "./styles";


const ModalChannel = ({ isOpen, onClose, onSubmit }) => {
    const [name, setName] = useState('');

    const handleSubmit = () => {
        if (name) {
            onSubmit(name);
            setName('');
        }
    };

    if (!isOpen) return null;

    return (
        <Overlay>
            <ModalContainer>
                <CloseButton onClick={onClose}>X</CloseButton>
                <h2>Criar Canal</h2>
                <Input
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Digite o nome do canal" 
                />
                <SubmitButton onClick={handleSubmit}>Criar</SubmitButton>
            </ModalContainer>
        </Overlay>
    );
};

export default ModalChannel;