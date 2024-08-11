import { FaHome } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Nav } from "./styles";
import { addNewChannel } from '@/store/slices/canaisSlice';

function Header() {
    const dispatch = useDispatch();

    const handleCreateChannel = () => {
        const name = prompt('Digite o nome do canal:');
        if (name) {
            dispatch(addNewChannel(name));
        }
    };

    return (
        <Nav>
            <a href="#"><FaHome size={24}/></a>
            <button onClick={handleCreateChannel}>Criar canal</button>
        </Nav>
    );
}

export default Header;
