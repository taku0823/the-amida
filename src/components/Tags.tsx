import { useContext } from 'react';
import { StartOptionsContext } from '../context/StartOptionsContext';
import styled from 'styled-components';

const AmidaTags = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px 16px;
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

const Tags = () => {
  const { startOptions, setStartOptions } = useContext(StartOptionsContext);

  const deleteTag = (target: string) => {
    setStartOptions(startOptions.filter((option) => option !== target));
  };

  return (
    <AmidaTags>
      {startOptions.map((option) => (
        <AmidaTag key={option}>
          {option}
          <AmidaDelete onClick={() => deleteTag(option)} />
        </AmidaTag>
      ))}
    </AmidaTags>
  );
};

export default Tags;
