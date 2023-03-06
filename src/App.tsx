import Form from './components/Form';
import { StartOptionsProvider, GoalOptionsProvider } from './context/OptionsContext';
import styled from 'styled-components';
import GlobalStyle from './theme/globalStyles';

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
      <StartOptionsProvider>
        <GoalOptionsProvider>
          <Main>
            <Title>THE あみだ</Title>
            <Form />
          </Main>
        </GoalOptionsProvider>
      </StartOptionsProvider>
    </>
  );
};

export default App;
