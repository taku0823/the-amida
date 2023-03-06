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

const AmidaTags = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px 16px;
`;

const AmidaTag = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 32px;
  padding: 0 16px;
  border: 1px solid #e5e5e5;
  border-radius: 16px;
  white-space: nowrap;
  overflow: hidden;
`;

const AmidaDelete = styled.span`
  content: '';
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  display: block;
  width: 20px;
  height: 20px;
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 50%;
  transition: all 0.32s;
  z-index: 10;
  cursor: pointer;
  &:hover {
    background: #fa243c;
    border-color: #fa243c;
  }
  &:hover::before,
  &:hover::after {
    background: #fff;
  }
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1px;
    height: 12px;
    background: #767676;
    border-radius: 50%;
  }
  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

const Form = () => {
  const startInput = useInput('');
  const [startOptions, setStartOptions] = useState<Array<string>>([]);

  const addStartOptions = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    if (startInput.input === '') return;
    setStartOptions((prevState) => [...prevState, startInput.input]);
    startInput.clearInput();
  };

  const clearAllOptions = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    setStartOptions([]);
  };

  const deleteTag = (target: string) => {
    setStartOptions(startOptions.filter((option) => option !== target));
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
      <AmidaTags>
        {startOptions.map((option) => (
          <AmidaTag key={option}>
            {option}
            <AmidaDelete onClick={() => deleteTag(option)} />
          </AmidaTag>
        ))}
      </AmidaTags>
    </AmidaForm>
  );
};

export default Form;
