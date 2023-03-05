import { useState } from 'react';
import useInput from '../hooks/useInput';
import styled from 'styled-components';

const AmidaForm = styled.div`
  max-width: 704px;
  margin: 0 auto 24px;
`;

const AmidaInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

const AmidaLabel = styled.label`
  margin-right: 16px;
  font-weight: bold;
`;

const AmidaInput = styled.input`
  background: #fff;
  width: 400px;
  height: 40px;
  margin-right: 16px;
  padding: 0 16px;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  caret-color: #fa243c;
  text-align: left;
  &::placeholder {
    color: #767676;
    font-size: 14px;
  }
`;

const AmidaButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 96px;
  color: #fa243c;
  border: 2px solid #fa243c;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.32s;
  &:hover {
    background: #fa243c;
    color: #fff;
  }
  &:first-of-type {
    margin-right: 16px;
  }
`;

const Form = () => {
  const startInput = useInput('');
  const [startOptions, setStartOptions] = useState<Array<string | number>>([]);

  const addStartOptions = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    setStartOptions((prevState) => [...prevState, startInput.input]);
    startInput.clearInput();
  };

  const clearAllOptions = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    setStartOptions([]);
  };

  return (
    <AmidaForm>
      <AmidaInputWrapper>
        <AmidaLabel htmlFor="start">スタート</AmidaLabel>
        <AmidaInput
          type="text"
          name="start"
          placeholder="スタートの選択肢を入力して下さい"
          value={startInput.input}
          onChange={startInput.handlInput}
        />
        <AmidaButton onClick={addStartOptions}>追加</AmidaButton>
        <AmidaButton onClick={clearAllOptions}>クリア</AmidaButton>
      </AmidaInputWrapper>
    </AmidaForm>
  );
};

export default Form;
