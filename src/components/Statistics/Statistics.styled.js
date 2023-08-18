import styled from 'styled-components';

const getRandomHexColor = props => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

export const StatisticsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 300px;
  background-color: #addb88;
`;
export const Title = styled.h2`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 70px;
  margin-bottom: 0;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 350px;
  height: 70px;
`;

export const ListItem = styled.li`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  background-color: ${getRandomHexColor};
`;
export const Label = styled.span`
  display: flex;
  margin-bottom: 10px;
`;
export const Percentage = styled.span`
  display: flex;
`;
