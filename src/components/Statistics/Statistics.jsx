import PropTypes from 'prop-types';
import {
  StatisticsWrapper,
  Title,
  StatList,
  ListItem,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsWrapper>
      <Title>{title}</Title>
      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <ListItem $stats={stats} key={id}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </ListItem>
          );
        })}
      </StatList>
    </StatisticsWrapper>
  );
};
Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
