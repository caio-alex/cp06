import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

const Opcoes = styled.ul`
    display: flex;
`

const Link = styled(RouterLink)`
    text-decoration: none;
    color: #000;
    &:hover {
        color: #007BFF;
    }
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OpcoesHeader() {
    return (
        <Opcoes>
            {textoOpcoes.map((texto) => (
                <Opcao key={texto}>
                    <Link to={`/${texto.toLowerCase().replace(' ', '')}`}>{texto}</Link>
                </Opcao>
            ))}
        </Opcoes>
    )
}

export default OpcoesHeader