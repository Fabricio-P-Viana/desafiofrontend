import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ButtonCreateChannel, Nav } from "./styles";
import { addNewChannel } from '@/store/slices/canaisSlice';
import ModalChannel from '../Modals/Channel';

function Header() {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
    const handleCreateChannel = (name) => {
        dispatch(addNewChannel(name));
        handleCloseModal();
    };

    return (
        <>
            <Nav>
                <ButtonCreateChannel onClick={handleOpenModal}>+ Canal</ButtonCreateChannel>
            </Nav>
            <ModalChannel 
                isOpen={isModalOpen} 
                onClose={handleCloseModal} 
                onSubmit={handleCreateChannel} 
            />
        </>
    );
}

export default Header;
