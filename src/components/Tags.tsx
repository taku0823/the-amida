import styled from 'styled-components';

const AmidaTagsWrapper = styled.div`
  min-height: 72px;
`;
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

type Props = {
  options: string[];
  setOptions: React.Dispatch<React.SetStateAction<string[]>>;
  extraHeight?: boolean;
};

const Tags = ({ options, setOptions }: Props) => {
  const deleteTag = (target: string) => {
    setOptions(options.filter((option) => option !== target));
  };

  return (
    <AmidaTagsWrapper>
      <AmidaTags>
        {options.map((option) => (
          <AmidaTag key={option}>
            {option}
            <AmidaDelete onClick={() => deleteTag(option)} />
          </AmidaTag>
        ))}
      </AmidaTags>
    </AmidaTagsWrapper>
  );
};

export default Tags;
