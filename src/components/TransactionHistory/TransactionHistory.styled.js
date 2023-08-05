import styled from '@emotion/styled';

const Table = styled.table`
  margin: 0 auto;
  width: 500px;
`;

const Title = styled.tr`
  width: 100%;
  height: 40px;
  color: white;
  background-color: blue;
`;

const TransactionsRow = styled.tr`
height:40px;
text-align:center;
margin-top:10px;
:nth-child(even) {
background-color: gray;
}
`

export { Table, Title, TransactionsRow };
