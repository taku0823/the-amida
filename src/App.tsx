import styled from 'styled-components';
import GlobalStyle from './theme/globalStyles';
import Form from './components/Form';

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 56px;
`;

const Title = styled.h1`
  color: #fa243c;
  margin-bottom: 40px;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Main>
        <Title>THE あみだ</Title>
        <Form />
      </Main>
    </>
  );
};

export default App;
