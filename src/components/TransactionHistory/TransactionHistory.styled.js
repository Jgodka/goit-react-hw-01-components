import styled from 'styled-components';

const getColorText = props => {
  switch (props.type) {
    case 'invoice':
      return 'red';
    case 'payment':
      return 'green';
    case 'withdrawal':
      return 'blue';
    default:
      return null;
  }
};

export const TableTransaction = styled.table`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 100%;
  padding-top: 20px;
  margin-left: 20px;
`;
export const TableHeader = styled.thead`
  background-color: #bf72f2;
  border: 1px solid black;
  padding-top: 15px;
  padding-bottom: 15px;
`;
export const TableList = styled.tr`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
export const TableValue = styled.tbody``;

export const TableListValue = styled.tr`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
  border: 1px solid black;
`;

export const ListItem = styled.th`
  width: 80px;
  display: flex;
`;

export const ListItemValue = styled.td`
  color: ${getColorText};
  width: 80px;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  justify-content: center;
`;
