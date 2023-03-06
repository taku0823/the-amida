import { useContext } from 'react';
import Tags from '../components/Tags';
import { GoalOptionsContext } from '../context/OptionsContext';
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

const GoalForm = () => {
  const goalInput = useInput('');
  const { goalOptions, setGoalOptions } = useContext(GoalOptionsContext);

  const handleGoalKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.nativeEvent.isComposing || event.key !== 'Enter') return;

    if (goalInput.input === '') return;

    setGoalOptions((prevState) => [...prevState, goalInput.input]);
  };

  const addGoalOptions = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    if (goalInput.input === '') return;
    setGoalOptions((prevState) => [...prevState, goalInput.input]);
  };

  const clearGoalAllOptions = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    if (goalOptions.length === 0) return;
    setGoalOptions([]);
  };

  return (
    <AmidaForm>
      <AmidaInputWrapper>
        <AmidaLabel htmlFor="goal">ゴール</AmidaLabel>
        <AmidaInput
          type="text"
          name="goal"
          placeholder="ゴールの選択肢を入力して下さい"
          value={goalInput.input}
          onChange={goalInput.handlInput}
          onKeyDown={handleGoalKeyDown}
        />
        <AmidaButton onClick={addGoalOptions}>追加</AmidaButton>
        <AmidaButton onClick={clearGoalAllOptions}>クリア</AmidaButton>
      </AmidaInputWrapper>
      <Tags options={goalOptions} setOptions={setGoalOptions} />
    </AmidaForm>
  );
};

export default GoalForm;
