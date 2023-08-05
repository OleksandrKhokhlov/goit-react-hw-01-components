import {
  StatisticsItem,
  StatisticsList,
  StatisticsSection,
  StatisticsTitle,
} from './Statistics.styled';

export const Statistic = ({ title, stats, stats: { label } }) => {
  return (
    <StatisticsSection>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatisticsList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem key={id} label={label}>
            <span>{label} </span>
            <span>{percentage}</span>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </StatisticsSection>
  );
};
