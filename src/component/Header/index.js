import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../IconesHeader'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const HeaderContainer = styled.header`
    background-color: #FFF;
    opacity: 0.7;
    width: 100%;
    display: flex;
    justify-content: center;
`

function Header() {
    const navigate = useNavigate();
    const handleLogoClick = () => {
        navigate('/home');
    };
    return (
        <HeaderContainer>
            <Logo onClick={handleLogoClick}/>
            <OpcoesHeader/>
            <IconesHeader/>
        </HeaderContainer>
    )
}

export default Header