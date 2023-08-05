import { TransactionsRow } from "./TransactionHistory.styled"

export const TransactionHistoryItem = ({type, amount, currency }) => {
    return (
            <TransactionsRow>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
            </TransactionsRow>
    )
}