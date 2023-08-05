import { Title } from "./TransactionHistory.styled";

export const TableTitle = () => {
    return (
      <Title>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </Title>
    );
}