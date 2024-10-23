import Header from '../component/Header'
import AppContainer from '../component/AppContainer'
import styled from 'styled-components';
import { Aba } from '../component/Aba';
const TituloCat = styled.h1`
color: white;
text-align: center;
margin-top: 100px;
`



const Categorias = () => {
  return (
    <AppContainer>
      <Header />
      <TituloCat>CATEGORIAS</TituloCat>
      <Aba/>
    </AppContainer>
  );
}

export default Categorias