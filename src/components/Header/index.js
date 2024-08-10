import { FaHome } from 'react-icons/fa';

import { Nav } from "./styles";

export default function Header() {
    return (
        <Nav>
            <a href="#"><FaHome size={24}/></a>
        </Nav>
    );
}