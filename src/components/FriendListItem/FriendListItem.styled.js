import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  margin-left: 20px;
  gap: 20px;
  width: 500px;
  height: 100px;
  justify-content: start;
  align-items: center;
  box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => {
    return props.$isOnline ? 'green' : 'red';
  }};
`;

export const Avatar = styled.img`
  width: 70px;
  height: 70px;
`;
export const Name = styled.p`
  font-size: 24px;
  font-weight: 700;
`;
