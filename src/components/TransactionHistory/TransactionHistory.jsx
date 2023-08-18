import PropTypes from 'prop-types';
import {
  TableTransaction,
  TableHeader,
  TableValue,
  TableList,
  TableListValue,
  ListItem,
  ListItemValue,
} from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <TableTransaction>
      <TableHeader>
        <TableList>
          <ListItem>Type</ListItem>
          <ListItem>Amount</ListItem>
          <ListItem>Currency</ListItem>
        </TableList>
      </TableHeader>
      <TableValue>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TableListValue key={id}>
              <ListItemValue type={type}>{type}</ListItemValue>
              <ListItemValue>{amount}</ListItemValue>
              <ListItemValue>{currency}</ListItemValue>
            </TableListValue>
          );
        })}
      </TableValue>
    </TableTransaction>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
