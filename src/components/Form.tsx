import { useState } from 'react';
import styled from 'styled-components';

const AmidaForm = styled.div`
  margin-bottom: 24px;
`;

const AmidaInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
  const [startInput, setStartInput] = useState<string>('');
  const [startOptions, setStartOptions] = useState<string[]>([]);

  const getStartInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartInput(event.target.value);
  };

  const addStartOptions = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    setStartOptions((prevState) => [...prevState, startInput]);
    setStartInput('');
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
          value={startInput}
          onChange={getStartInput}
        />
        <AmidaButton onClick={addStartOptions}>追加</AmidaButton>
        <AmidaButton onClick={clearAllOptions}>クリア</AmidaButton>
      </AmidaInputWrapper>
    </AmidaForm>
  );
};

export default Form;
