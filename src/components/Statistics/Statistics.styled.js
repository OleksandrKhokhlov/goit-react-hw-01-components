import styled from '@emotion/styled';

const getColor = randomColor =>
  (randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`);

const StatisticsSection = styled.section`
  margin: 0 auto;
  max-width: 300px;
  text-align: center;
`;
const StatisticsTitle = styled.h2`
  text-transform: uppercase;
`;
const StatisticsList = styled.ul`
  list-style: none;
  margin: 0 auto;
  padding: 0;
  display: flex;
`;
const StatisticsItem = styled.li`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
  padding: 10px 0;
  background-color: ${({ label }) => (label !== '') ? getColor() : '#0f0f0e4f'
    // switch (label) {
    //   case '.pdf':
    //     return getColor();
    //   case '.docx':
    //     return getColor();
    //   case '.mp3':
    //     return getColor();
    //   case '.psd':
    //     return getColor();

    //   default:
    //     return '#0f0f0e4f';
    // }
  };
`;

export { StatisticsSection, StatisticsList, StatisticsTitle, StatisticsItem };
